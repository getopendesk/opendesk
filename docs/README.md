# OpenDesk Documentation

Welcome to the OpenDesk documentation! This section contains detailed information about the project, its architecture, and how to use it effectively.

## Table of Contents

- [OpenDesk Documentation](#opendesk-documentation)
  - [Table of Contents](#table-of-contents)
  - [Architecture Overview](#architecture-overview)
    - [Client (React)](#client-react)
    - [Landing (Next.js)](#landing-nextjs)
    - [Server (NestJS)](#server-nestjs)
    - [Database (PostgreSQL)](#database-postgresql)
  - [Development Guide](#development-guide)
  - [API Documentation](#api-documentation)
  - [Database Schema](#database-schema)
  - [Deployment Guide](#deployment-guide)
  - [Security Guidelines](#security-guidelines)
  - [Contributing](#contributing)
  - [Support](#support)
  - [License](#license)

## Architecture Overview

OpenDesk is built using a microservices architecture with the following components:

### Client (React)
- Frontend application built with React and TypeScript
- Implements the user interface and client-side logic
- Communicates with the server via REST API

### Landing (Next.js)
- Marketing and documentation website
- Built with Next.js for optimal SEO and performance
- Serves as the entry point for new users

### Server (NestJS)
- Backend API built with NestJS
- Handles business logic and data persistence
- Implements RESTful endpoints for client communication

### Database (PostgreSQL)
- Primary data store for the application
- Handles user data, projects, tasks, and other entities
- Uses Prisma as the ORM

## Development Guide

For detailed development instructions, please refer to:
- [Client Development Guide](development/client.md)
- [Server Development Guide](development/server.md)
- [Landing Page Development Guide](development/landing.md)

## API Documentation

The API documentation is available at:
- [API Reference](api/README.md)
- [Authentication](api/authentication.md)
- [Endpoints](api/endpoints.md)

## Database Schema

For information about the database structure:
- [Database Schema](database/schema.md)
- [Migrations](database/migrations.md)

## Deployment Guide

Instructions for deploying OpenDesk:
- [Production Deployment](deployment/production.md)
- [Docker Deployment](deployment/docker.md)
- [Environment Configuration](deployment/environment.md)

## Security Guidelines

Important security information:
- [Security Best Practices](security/best-practices.md)
- [Authentication](security/authentication.md)
- [Authorization](security/authorization.md)

## Contributing

Please read our [Contributing Guidelines](../CONTRIBUTING.md) before submitting pull requests.

## Support

If you need help or have questions:
- Open an issue on GitHub
- Join our community chat
- Check our FAQ section

## License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details. 