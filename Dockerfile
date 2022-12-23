FROM python:3.11

# Set the working directory to /app
WORKDIR /app

# Copy the requirements.txt file to the working directory
COPY requirements.txt /app

# Install the required python packages
RUN pip install -r requirements.txt

# Copy the rest of the application code.md to the working directory
COPY . /app

# Expose the default Flask port
EXPOSE 5000

ENV FLASK_PORT=5000

# Set the default command to run the Flask app
CMD ["python", "app.py"]
