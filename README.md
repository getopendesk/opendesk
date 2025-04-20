# OpenDesk

OpenDesk is an open-source project management tool designed to be a powerful alternative to Jira, Asana, and ClickUp. Built with modern technologies, it offers a flexible and customizable solution for teams of all sizes.

## Features

- 🎯 Task Management
- 📊 Project Tracking
- 👥 Team Collaboration
- 📅 Timeline & Calendar Views
- 📈 Analytics & Reporting
- 🔍 Advanced Search
- 🔄 Real-time Updates
- 🔒 Role-based Access Control

## Tech Stack

- **Frontend (Client)**: React + TypeScript
- **Landing Page**: Next.js
- **Backend**: NestJS
- **Database**: PostgreSQL
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- PostgreSQL (if running locally)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/opendesk.git
cd opendesk
```

2. Start the services using Docker Compose:
```bash
docker-compose up -d
```

3. Access the application:
- Client: http://localhost:5173
- Landing Page: http://localhost:3000
- API: http://localhost:8000

### Development Setup

1. Install dependencies for each service:
```bash
# Client
cd client && npm install

# Landing
cd landing && npm install

# Server
cd server && npm install
```

2. Start development servers:
```bash
# Client
cd client && npm run dev

# Landing
cd landing && npm run dev

# Server
cd server && npm run start:dev
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details.

## Code of Conduct

Please read our [Code of Conduct](docs/CODE_OF_CONDUCT.md) before contributing.

## License

This project is licensed under the GNU Affero General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

The AGPL v3 license ensures that:
- The software remains free and open source
- Any modifications must also be open source
- Users have the right to access the source code
- Network users have the right to receive the source code

## Support

- 📝 [Documentation](docs/README.md)
- 🐛 [Issue Tracker](https://github.com/yourusername/opendesk/issues)
- 💬 [Discussions](https://github.com/yourusername/opendesk/discussions)

## Acknowledgments

- Thanks to all our contributors
- Inspired by Jira, Asana, and ClickUp
