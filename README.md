# Django Web App Demo

### A demo website written in Python's Django framework

This project is based on the essentials learned from the Mozilla Developer Network (MDN) tutorials which can be found [here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website). I have expanded upon the basic tutorial by including the most recent Python packages as of October 2018 and revised sections, including units tests, to reflect Dango 2.1 changes. I have designed the front-end by using examples from [Bootstrap 4](https://getbootstrap.com/docs/4.1/examples/).

- Added basic text search that uses Django's built in functions for PostgreSQL, based on this [documentation](https://docs.djangoproject.com/en/2.1/ref/contrib/postgres/search/).

- Added a lightweight API for data extraction and [Chart.js](https://www.chartjs.org/) for data visualization.

## Getting Started with Development

This project uses Python 3, Django and a PostgreSQL database (production and development). A development virtual environment created with `venv` is recommended.

### Prerequisites

A project folder with a Python 3 `venv` sub-folder for easier integration with VS Code.

### Installing

Activate the Python virtual environemnt and then install with:

```
pip install -r requirements.txt
```

For development the Django defaults apply, see the official [Django documentation](https://docs.djangoproject.com/en/2.2/) for more details.

Some examples:

```
python manage.py startapp appname
python manage.py migrate
python manage.py runserver
```

The following environment variables need to be set so that they can be accessed in `settings.py`:

Where

- `APP_SECRET_KEY` is the encryption key used by Django, specifc to development. It is recommended to use a different key in production.
- `APP_DB_NAME` is the PostgreSQL database name
- `APP_DB_USER` is the database user
- `APP_DB_PASSWORD` is the database password for the user

```
APP_SECRET_KEY
APP_DB_NAME
APP_DB_USER
APP_DB_PASSWORD
```

## Tests

Test are performed with Python's built in testing library.

```
python manage.py test
```

### Testing details

The main objective for testing is to cover any custom classes and functions that were created to render the application and handle data manipulation.

All tests are in the folder `tests`.

## Deployment

The following environment variables need to be set so that they can be accessed in `settings.py`:

Note that `DJANGO_SECRET_KEY` should be different from the `APP_SECRET_KEY` (used in development) for better security.

```
DJANGO_SECRET_KEY
APP_DB_NAME
APP_DB_USER
APP_DB_PASSWORD
```

For demonstration purposes this application was deployed on Heroku.

Specific to Heroku, a `Procfile` was required to tell the service to use `gunicorn` and the `locallibrary.wsgi` implementation.

Heroku should automatically configure the database connection infromation (e.g. `APP_DB_NAME`, etc.) if the PostgreSQL add-on is used. If using another database provider, the environment variables listed above will need to be configured accordingly.

## Usage

Here are some screenshots of the application.

The main page:

![Main page](https://sbhaseen.github.io/django_web_app_demo/img/MainPage.png)

The main page in mobile view:

<img src="https://sbhaseen.github.io/django_web_app_demo/img/MobileMain.png" alt="main mobile page" width="360">

The book list:

![Book list](https://sbhaseen.github.io/django_web_app_demo/img/BookList.png)

The author list:

![Author list](https://sbhaseen.github.io/django_web_app_demo/img/Authors.png)

## Built With

- [Django](https://www.djangoproject.com/) - a high-level Python Web framework that encourages rapid development and clean, pragmatic design
- [Bootstrap (front-end library)](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.
- [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting for designers & developers

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
