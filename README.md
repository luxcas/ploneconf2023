# Plone Conference Training 🚀

[![Built with Cookiecutter Plone Starter](https://img.shields.io/badge/built%20with-Cookiecutter%20Plone%20Starter-0083be.svg?logo=cookiecutter)](https://github.com/collective/cookiecutter-plone-starter/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![Backend Tests](https://github.com/luxcas/ploneconf2023/actions/workflows/backend.yml/badge.svg)](https://github.com/luxcas/ploneconf2023/actions/workflows/backend.yml)
[![Frontend Tests](https://github.com/luxcas/ploneconf2023/actions/workflows/frontend.yml/badge.svg)](https://github.com/luxcas/ploneconf2023/actions/workflows/frontend.yml)

A new project using Plone 6.

## Quick Start 🏁

### Prerequisites ✅

Ensure you have the following installed:

- Python 3.11 🐍
- Node 18 🟩
- yarn 🧶
- Docker 🐳

### Installation 🔧

1. Clone the repository:

```shell
git clone git@github.com:luxcas/ploneconf2023.git
cd ploneconf2023
```

2. Install both Backend and Frontend:

```shell
make install
```

### Fire Up the Servers 🔥

1. Create a new Plone site on your first run:

```shell
make create-site
```

2. Start the Backend at [http://localhost:8080/](http://localhost:8080/):

```shell
make start-backend
```

3. In a new terminal, start the Frontend at [http://localhost:3000/](http://localhost:3000/):

```shell
make start-frontend
```

Voila! Your Plone site should be live and kicking! 🎉

### Local Stack Deployment 📦

Deploy a local `Docker Compose` environment that includes:

- Docker images for Backend and Frontend 🖼️
- A stack with a Traefik router and a Postgres database 🗃️
- Accessible at [http://ploneconf2023.localhost](http://ploneconf2023.localhost) 🌐

Execute the following:

```shell
make stack-start
make stack-create-site
```

And... you're all set! Your Plone site is up and running locally! 🚀

## Project Structure 🏗️

This monorepo consists of three distinct sections: `backend`, `frontend`, and `devops`.

- **backend**: Houses the API and Plone installation, utilizing pip instead of buildout, and includes a policy package named ploneconf2023.
- **frontend**: Contains the React (Volto) package.
- **devops**: Encompasses Docker Stack and Ansible playbooks.

### Why This Structure? 🤔

- All necessary codebases to run the site are contained within the repo (excluding existing addons for Plone and React).
- Specific GitHub Workflows are triggered based on changes in each codebase (refer to .github/workflows).
- Simplifies the creation of Docker images for each codebase.
- Demonstrates Plone installation/setup without buildout.

## Code Quality Assurance 🧐

To automatically format your code and ensure it adheres to quality standards, execute:

```shell
make format
```

Linters can be run individually within the `backend` or `frontend` folders.

## Internationalization 🌐

Generate translation files for Plone and Volto with ease:

```shell
make i18n
```

## Credits and Acknowledgements 🙏

Crafted with care by **This was generated by [cookiecutter-plone-starter](https://github.com/collective/cookiecutter-plone-starter) on 2023-10-03 07:49:24**. A special thanks to all contributors and supporters!


## If error connect backend

RAZZEL_INTERNAL_API=http://127.0.0.1:8080/Plone
