import sys
import tensorflow as tf
import joblib
import numpy as np
import json

class MeanMetricWrapper(tf.keras.metrics.MeanMetricWrapper):
    def __init__(self, name='mean_metric_wrapper', dtype=None):
        super(MeanMetricWrapper, self).__init__(name, dtype)

class ModelPredictor:
    def __init__(self, model_paths):
        self.models = {}
        for model_name, model_path in model_paths.items():
            if model_path.endswith('.h5'):
                self.models[model_name] = tf.keras.models.load_model(model_path, custom_objects={'MeanMetricWrapper': tf.keras.metrics.Mean})
            elif model_path.endswith('.pkl'):
                self.models[model_name] = joblib.load(model_path)
            elif tf.saved_model.contains_saved_model(model_path):
                tf.keras.utils.get_custom_objects().update({'MeanMetricWrapper': MeanMetricWrapper})
                self.models[model_name] = tf.keras.models.load_model(model_path)
            else:
                raise ValueError(f"Unsupported model format for '{model_name}'. Please provide models in .h5, .pkl, or saved_model format.")

    def predict(self, input_data):
        predictions = {}
        for model_name, model in self.models.items():
            if isinstance(model, tf.keras.Model):
                input_data = tf.convert_to_tensor(input_data)
            predictions[model_name] = model.predict(input_data).tolist()  # Convert predictions to list for JSON serialization
        return predictions

def soft_vote(predictions):
    # Combine predictions using soft voting
    combined_prediction = np.mean(list(predictions.values()), axis=0)
    return combined_prediction.tolist()  # Convert combined prediction to list for JSON serialization

if __name__ == "__main__":
    # Example usage
    model_paths = {
        "model1": "model1",
        "model2": "model2",
        "model3": "model3",
        # Add more model paths as needed
    }

    predictor = ModelPredictor(model_paths)

    if len(sys.argv) < 13:
        print("Usage: python predict.py feature1 feature2 ...")
        sys.exit(1)

    input_data = [float(x) for x in sys.argv[1:]]  # Convert arguments to floats

    # Example model prediction
    try:
        predictions = predictor.predict([input_data])
        combined_prediction = soft_vote(predictions)
        print(json.dumps(combined_prediction))  # Print combined prediction as JSON string
    except ValueError as e:
        print(json.dumps({"error": str(e)}))  # Print error message as JSON string
