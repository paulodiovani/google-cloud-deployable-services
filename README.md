# Google Cloud deployable Services for testing

Some Node.js services to test Goggle Cloud deploy on App Engine Flexible Environment.

## Services

- `app.js` &mdash; A simple webserver who tell fortune. This is the `default` service.
- `time-logger.js` &mdash; Logs service update since started.
- `fortune-logger.js` &mdash; Writes fortune to `stdout` at every 5 seconds.

## Run

```bash
git clone https://github.com/paulodiovani/google-cloud-deployable-services.git
cd google-cloud-deployable-services
npm install
SERVICE=service-name.js1 npm start
```

Where `service-name.js` is one of the service scripts listed above.

## Deploy

1. Install [Cloud SDK](https://cloud.google.com/sdk/)

1. Go to [Cloud Console Projects](https://console.cloud.google.com/iam-admin/projects) and create a new project

1. Set Up you project as default project

    - If it's your first time using gcloud

        ```bash
        gcloud init
        ```

    - If you already worked with other projects, just set the new project as default

        ```
        gcloud config set project PROJECT_NAME
        ```

        Where `PROJECT_NAME` is the name of the project you have created.

1. Deploy `app.js|default` service

    ```bash
    gcloud app deploy
    ```

1. Deploy `time-logger.js` service

    ```bash
    gcloud app deploy time-logger.yaml
    ```

1. Deploy `fortune-logger.js` service

    ```bash
    gcloud app deploy fortune-logger.yaml
    ```
