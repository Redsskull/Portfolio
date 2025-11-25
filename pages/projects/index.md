# Projects

A collection of systems I've built while learning to program. Each project taught me something new about designing intelligent software.

---

## 🌤️ Weather Intelligence System
**Go + Python | Pattern Recognition | Concurrent Processing**

A hybrid system that makes two languages talk through JSON orchestration. Features pattern recognition, intelligent caching, and concurrent data collection from multiple locations. My first experience orchestrating cross-language systems.

<a href="https://github.com/Redsskull/weather-intelligence-system" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** Go concurrency, Python ML, cross-language integration, API orchestration

---

## 💼 Stock Trading Simulator | Python, Flask, PostgreSQL
Full-stack web application with user authentication, real-time stock data, and transaction management.

Built with Flask, SQLAlchemy ORM, and PostgreSQL. Features database migrations, secure password hashing, session management, and API integration with Finnhub for live market data. Deployed to production on Render.

- User authentication and session management
- Database design with SQLAlchemy ORM and migrations
- RESTful operations for trading, portfolio management
- Real-time stock data via API integration
- Production deployment with PostgreSQL

<a href="https://stock-trading-simulator.onrender.com/">View Live Demo</a> | <a href="https://github.com/Redsskull/stock-trading-simulator">View on GitHub</a>

## 💬 P2P Chat System | Go, Distributed Systems, Network Programming

Production-ready peer-to-peer chat application inspired by IRC and early internet protocols. Features full mesh networking, automatic peer discovery via UDP multicast, and beautiful terminal UI built with Bubble Tea.

**Technical Highlights:**
- Full P2P mesh network topology (every peer connects to every other peer)
- Automatic peer discovery using UDP multicast (224.0.0.1:9999)
- Direct TCP connections for reliable real-time messaging
- Smart port assignment with collision detection (8080-8999 range)
- IRC-style commands (/help, /users, /nick, /clear, /quit)
- Network resilience with automatic reconnection
- Cross-platform with system installation support (Linux)

**Architecture:**
- UDP multicast for local network peer discovery
- TCP mesh connections for reliable message delivery
- JSON-based message protocol
- Goroutines for non-blocking network I/O
- Terminal UI with color-coded users and live status updates

**Production Features:**
- System-wide installation (`sudo make install` gives `p2pchat` command)
- Comprehensive documentation with architecture diagrams
- Interactive demo script showcasing all features
- Validated through multi-user testing (3+ simultaneous users)
- Live demonstration via asciinema recording

[View on GitHub](https://github.com/Redsskull/p2pchat) | [Watch Demo](https://asciinema.org/a/ykPnzDlq7LGyskLnWRf5NWO1T)

## 🎮 Warcraft Logs CLI
**Go | GraphQL | OAuth2**

A command-line tool for querying the Warcraft Logs API. Learned GraphQL by diving into a complex real-world API instead of following tutorials. Features damage/healing analysis, death timelines, and interrupt tracking.

<a href="https://github.com/Redsskull/wclogs-cli" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** GraphQL query construction, OAuth2 flows, complex JSON parsing, terminal UI design

---

## ⚔️ War Card Game
**Go | Fyne | Cross-Platform GUI**

My first complete project from CS50. A full-featured card game with GUI, sound effects, and professional packaging for Windows, Linux, and macOS. Taught me about asset bundling, cross-compilation with Zig, and shipping polished software.

<a href="https://github.com/Redsskull/war-card-game" target="_blank" rel="noopener noreferrer">View on GitHub</a> | <a href="https://youtu.be/U8c8GuNDFkY" target="_blank" rel="noopener noreferrer">Watch Demo</a>

**What I learned:** GUI programming with Fyne, cross-platform distribution, asset management, finishing projects

---

## 📖 Knights and Creatures
**Python | Interactive Fiction | Branching Narratives**

A text adventure inspired by Asimov's storytelling. Features four character classes, branching narratives, class-specific puzzle solutions, and a companion system. My first solo project where I learned to turn stories into code.

<a href="https://github.com/Redsskull/Knights-and-Creatues" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** Game state management, branching logic, Python fundamentals, custom exceptions

---

## 💬 P2P Chat System
**Go | Distributed Systems | Network Programming**

*(In Progress)* An IRC-style distributed chat system built on my early internet roots (IRC, Usenet, Hotline). Features peer discovery, message broadcasting, and terminal UI. Building the kind of software I grew up using.

<a href="https://github.com/Redsskull/p2p-chat" target="_blank" rel="noopener noreferrer">View on GitHub</a> *(Coming Soon)*

**What I'm learning:** P2P protocols, distributed systems, peer discovery, real-time networking

---

## 🎃 Open Source Contributions

**Hacktoberfest 2024**
- CI/CD pipeline improvements (YAML, Makefiles)
- Python testing with pytest
- Documentation enhancements

---

## What's Next

I'm focused on distributed systems and backend infrastructure - but I'm also passionate about telling stories through code. Like Asimov, Crichton, and even the movie Free Guy, I'm drawn to creating systems where characters and worlds feel alive and surprising.

Future projects will explore:
- Interactive fiction with emergent AI behavior
- More P2P protocols and distributed architectures
- Systems that blend storytelling with intelligent design
- Containerization and deployment (Podman/Docker)
- Emergent systems where behavior surprises even me

---

**[Home](/)** • **[About](/about)** • **[Contact](/contact)**
