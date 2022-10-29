# kurabeteminaika

### backend/web-back/.env just for development
    SECRET_KEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    DEBUG=False
    HOST=db
    USER=user

### migration for database
    $ docker-compose run --rm web-back sh -c "python manage.py makemigrations"
    $ docker-compose run --rm web-back sh -c "python manage.py migrate"

### create superuser
    docker-compose run --rm web-back sh -c "python manage.py createsuperuser"

### create packages(If you want to start a new project)
    docker-compose run --rm web-front sh -c "yarn create react-app . --template typescript"

### If you are joining a new project,　type the following command in web-front directory
    "yarn install"

### run server
    docker-compose up --build
