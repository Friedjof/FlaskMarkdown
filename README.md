# Markdown Webserver
_By Friedjof Noweck_
## Description
This is a simple markdown server. It is a simple web server that serves markdown files as html.
It is written in Python and uses the Flask framework.

## Usage
1. Place a markdown file in the `articles` directory with the extension `.md`.
2. Run the server with `python app.py`.
3. Navigate to `http://localhost:5000/articles/<filename>` to view the article.

## Installation
1. Install Python 3.6 or higher.
2. Install the requirements with `pip install -r requirements.txt`.

## Docker
1. Build the image with `docker build -t markdown-webserver .`.
2. Run the container with `docker run -p 5000:5000 markdown-webserver`.

## Support
Be free to open an issue on GitHub if you have any questions or problems.