import markdown
from flask import Flask, render_template
import glob

app = Flask(__name__)


@app.route('/article/<article_name>')
def show_article(article_name):
    # Check if the article exists
    if not glob.glob(f'{app.root_path}/articles/{article_name}.md'):
        return render_template('404.html'), 404

    # Lese die Markdown-Datei ein
    with open(f'{app.root_path}/articles/{article_name}.md', 'r') as f:
        article = f.read()

    # Convert Markdown to HTML
    article_html = markdown.markdown(
        article, extensions=[
            'fenced_code', 'codehilite', 'tables', 'toc', 'sane_lists', 'smarty', 'nl2br', 'wikilinks', 'meta',
            'admonition', 'attr_list', 'def_list', 'footnotes'
        ]
    )

    # Get the title of the article
    article_title = article.splitlines()[0].replace('#', '').strip()

    # Zeige den Artikel an, indem du das Template mit dem Inhalt und der CSS renderst
    # Render das HTML-Template mit dem konvertierten HTML
    return render_template('article.html', article_html=article_html, article_title=article_title)


if __name__ == '__main__':
    app.run(port=5000, host="0.0.0.0", debug_mode=True)
