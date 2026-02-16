# Projects

A collection of systems I've built while learning to program. Each project taught me something new about designing intelligent software.
Some of them could have users though!

---

## 💬 P2P Chat System
**Go, Distributed Systems, Network Programming**

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

<a href="https://github.com/Redsskull/p2pchat" target="_blank" rel="noopener noreferrer">View on GitHub</a> | <a href="https://asciinema.org/a/ykPnzDlq7LGyskLnWRf5NWO1T" target="_blank" rel="noopener noreferrer">Watch Demo</a>

**What I learned:** This is my greatest creation. I love and dislike it at the same time, and this makes me an "opinionated programmer," I think. It works — the UDP mesh is amazing, goroutines are working together, I used my reliable JSON for all data. What's not to like? Well, nothing. I'd just like to remake it in my favorite language of Ruby (or C) with actual DHT so it can have users!

---


## 🌤️ Weather Intelligence System
**Go + Python | Pattern Recognition | Concurrent Processing**

A hybrid system that makes two languages talk through JSON orchestration. Features pattern recognition, intelligent caching, and concurrent data collection from multiple locations. My first experience orchestrating cross-language systems.

<a href="https://github.com/Redsskull/weather-intelligence-system" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** I used Go for concurrency here. I realized for languages to talk, they need to read from a data source they both understand, which was JSON. I don't get to do a lot of Python, so using it to run "operations" was fun!

---

## 💼 Stock Trading Simulator
**Python, Flask, PostgreSQL**

Full-stack web application with user authentication, real-time stock data, and transaction management.

Built with Flask, SQLAlchemy ORM, and PostgreSQL. Features database migrations, secure password hashing, session management, and API integration with Finnhub for live market data. Deployed to production on Render.

- User authentication and session management
- Database design with SQLAlchemy ORM and migrations
- RESTful operations for trading, portfolio management
- Real-time stock data via API integration
- Production deployment with PostgreSQL

<a href="https://stock-trading-simulator.onrender.com/" target="_blank" rel="noopener noreferrer">View Live Demo</a> | <a href="https://github.com/Redsskull/stock-trading-simulator" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** This was a CS50 project given to me that I decided to build on. I didn't need to do half of what I did here and what I wanted to do I was limited from doing. JS was limited and Flask needed to be the main operator. I enjoyed showing I can do a full web app. However, I'll probably make a real stock trader in Rails because I love Ruby. P.S. every CRUD project needs a "What the CRUD?!"

---

## 📖 Ruby CLI Journal
**Ruby | CLI Design | Developer Tooling**

A terminal-based journaling application exploring Ruby's expressiveness for CLI design and backend logic. Currently in active development - building it to understand how Ruby handles persistence, search, and user interaction patterns.

**Features (In Progress):**
- Entry creation, editing, and deletion
- Search and filtering
- Clean, expressive Ruby code
- Exploring Ruby's approach to CLI tooling

<a href="https://github.com/Redsskull/journal" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** I really wondered what a journal app could be. However, I seem to have made my own CRUD (What the CRUD?!). I added color, menus. This project though, I did something special. I forgot all I learned, and I set out to code like I was in the 1970s: code, books, and a ruler for debug (and puts). I picked Ruby for this because I felt like it's the only language that wants me to succeed, and I did. This project, however small, made me a true programmer and technologist. Perhaps it'll have TUI/GUI soon too, with aliens.

---

## 🎮 Warcraft Logs CLI
**Go | GraphQL | OAuth2 | Professional Interrupt Analysis**

A command-line tool for querying the Warcraft Logs API that achieves professional-grade interrupt analysis matching the web interface. The breakthrough discovery of WCL's hidden `extraAbilityGameID` field enables perfect spell-to-interrupt correlation - something I figured out through API exploration, not documentation.

**Key Achievements:**
- **Interrupt analysis** with spell correlation and success rate tracking
- **Advanced death timelines** showing exact damage sources in 5-second windows
- **OAuth2 token management** with automatic refresh flows
- **Smart caching system** for ability names and player lookups
- **Player-specific analysis** with detailed timing breakdowns
- **Verbose mode** with API progress tracking and cache statistics

**Technical Highlights:**
- Complex GraphQL queries with nested event correlation
- Discovery of undocumented API fields through experimentation
- Real-time terminal UI with colorized output and progress indicators
- CSV/JSON export capabilities for data analysis
- Concurrent API calls with intelligent rate limiting

<a href="https://github.com/Redsskull/wclogs-cli" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** I certainly learned about complex GraphQL APIs, that's for sure. I called them all in curl to learn what they do because I'd never heard of Postman before. The project is not complete, uses correlation when I didn't know how to get exact data, and is more of a passion testimony to my love for World of Warcraft raiding of 10 years ago. Perhaps I'll turn this into a FOSS Subcreation one day.

---

## ⚔️ War Card Game
**Go | Fyne | Cross-Platform GUI**

My first complete project from CS50. A full-featured card game with GUI, sound effects, and professional packaging for Windows, Linux, and macOS. Taught me about asset bundling, cross-compilation with Zig, and shipping polished software.

<a href="https://github.com/Redsskull/war-card-game" target="_blank" rel="noopener noreferrer">View on GitHub</a> | <a href="https://youtu.be/U8c8GuNDFkY" target="_blank" rel="noopener noreferrer">Watch Demo</a>

**What I learned:** GUI programming with Fyne. I felt like I was doing CSS but worse, but I also made a video game, and I always loved video games! This was my CS50 final project.

---

## 📖 Knights and Creatures
**Python | Interactive Fiction | Branching Narratives**

A text adventure inspired by Asimov's storytelling. Features four character classes, branching narratives, class-specific puzzle solutions, and a companion system. My first solo project where I learned to turn stories into code.

<a href="https://github.com/Redsskull/Knights-and-Creatues" target="_blank" rel="noopener noreferrer">View on GitHub</a>

**What I learned:** To be continued. I made this very simply once in one file. But I made the above game so I will make a point and click... eventually.

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
