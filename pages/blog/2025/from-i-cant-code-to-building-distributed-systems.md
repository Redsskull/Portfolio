# From "I Can't Code" to Building Distributed Systems

*How CS50 taught me what a €3000 bootcamp couldn't*

---

I just finished building a peer-to-peer chat system with full mesh networking, automatic peer discovery, and real-time messaging. It works. It's production-ready. You can [watch it in action](https://asciinema.org/a/ykPnzDlq7LGyskLnWRf5NWO1T).

Six months ago, I thought I'd never understand programming.

## The Bootcamp That Taught Me Nothing

After my pilot career ended due to health issues, everyone told me the same thing: "Learn to code. Work from home. Make good money." So I signed up for a coding bootcamp. I won't name it, but I'll describe what happened.

**Month 1:** Build a website with HTML and CSS. Failed the assessment? Pay €150 to retake it.

**Month 2:** HTML, CSS, and JavaScript. Failed? Another €150.

This continued for five rounds, eventually adding Django and a decade-old version of React with Create React App and Bootstrap.

The problem wasn't the technology. The problem was I had no idea what I was actually doing. I wasn't learning to program - I was copying and pasting code to make things look pretty. When I asked "why does this work?" I was told "just copy it."

I met people who thrived there - designers who already understood visual thinking. But for someone who'd never coded before? I learned nothing except that "coding isn't for me."

## The YouTube Video That Changed Everything

Months later, while dealing with kidney stones, YouTube recommended a small video by David J. Malan explaining programming concepts. He talked about memory. About how computers do precisely what we tell them - nothing more, nothing less.

Something clicked.

I'd spent years reading Isaac Asimov's robot stories, fascinated by how intelligent machines work. I'd written Lua scripts for my World of Warcraft guild (WeakAuras and raid leader tools). Maybe I *could* understand this.

I started watching CS50 lectures. Then I started doing problem sets. Malan said "don't use AI to solve these problems" - and despite being on the AI bandwagon at the time, I listened. I hated it. But I'm glad I did.

## The Moment I Became a Programmer

Tideman broke me. It took a month. Maybe more - I don't quite recall. But halfway through, while wrestling with two-dimensional arrays, I had an "aha" moment.

**Lists, arrays, slices - they're all trying to do the same thing: keep ordered variables in computer memory.**

Humans can't even do that well. When variables get too numerous, we write them down... in a list.

When CS50 asked me to build a hash table a week later, I smiled. When they asked me to build a Flask web app, the design no longer frightened me. I understood that I could write the architecture - the design specs could come from a designer (or CS50's free templates).

I realized something fundamental: **I understand what computers need from me - precision.** I just have to look up how to be precise in whatever language or framework I'm using.

## From Hello World to P2P Networking

Fast forward to today. I just finished building a production-ready P2P chat system in Go.

**Technical highlights:**
- Full mesh P2P networking (UDP multicast discovery + TCP connections)
- Automatic peer discovery on local networks
- Beautiful terminal UI with real-time updates
- IRC-style commands (/help, /users, /nick, /quit)
- Network resilience with automatic reconnection
- Cross-platform with system installation support

**What it taught me:**
- Distributed systems design (mesh topology, leader election)
- Network programming (UDP, TCP, goroutines)
- Production software packaging
- That I can build things that actually work

Yes, it's LAN-only right now. I started easy because I'd never built anything like this. But I'm already dreaming about making it work over the internet - DHT-based discovery, NAT traversal, the whole nine yards.

## What I Learned About Learning

**Bootcamps aren't universally bad** - but they're not for everyone. If you already understand visual design or have programming fundamentals, they might accelerate your learning. But if you're starting from zero and they're teaching you to copy-paste without understanding *why*, you're not learning - you're memorizing patterns.

**CS50 taught me to think like a programmer:**
- Start with first principles (how does memory work?)
- Understand the problem before solving it
- Build things that don't work, then make them work
- Don't copy-paste - understand

**The difference:** One approach taught me to make websites. The other taught me to make *systems*.

## To Anyone Who Thinks "Coding Isn't For Me"

Maybe you tried a bootcamp and felt lost. Maybe you copy-pasted code without understanding it. Maybe you thought you were too old, too late, or too "non-technical."

I was a pilot who became too sick to fly. I worked blue-collar jobs. I'm 39. I failed a bootcamp. I thought I couldn't code.

Now I build distributed systems.

**The secret:** Find a teacher who explains *why* things work, not just *how* to make them look right. For me, that was CS50. For you, it might be something else. But don't give up just because one approach didn't work.

You're not "not a programmer." You just haven't found the right way to learn yet.

---

## The Technical Details (For the Curious)

If you want to see how the P2P chat system actually works:

**Architecture:**
- UDP multicast (224.0.0.1:9999) for peer discovery
- TCP mesh connections for reliable messaging
- JSON-based message protocol
- Goroutines for concurrent network I/O
- Bubble Tea framework for terminal UI

**Try it yourself:**
```bash
git clone https://github.com/Redsskull/p2pchat
cd p2pchat
make build
./p2pchat
```

Watch the [live demo](https://asciinema.org/a/ykPnzDlq7LGyskLnWRf5NWO1T) to see it working with multiple users.

[View the complete documentation on GitHub](https://github.com/Redsskull/p2pchat)

---

## What's Next

I'm still building. Still learning. Still figuring out how to turn the things I imagine into the things computers can execute.

If you're on that same journey - from "I can't code" to "I just built something that works" - I'd love to connect. Drop me a message, open an issue on GitHub, or just say hi.

We're all figuring this out together.

**Nate**  
[nathanielivry.dev](https://nathanielivry.dev) • [GitHub](https://github.com/Redsskull) • [LinkedIn](https://linkedin.com/in/redsskull)

---

*P.S. - Thank you to Radley Lewis for creating [rssg](https://github.com/radleylewis/rssg), the beautifully simple Rust static site generator that powers this blog. Sometimes the best tools are the ones that get out of your way and let you focus on writing.*
