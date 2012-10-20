# ar-drone-simulator

Simulate your drone on your computer before you take it for a real flight.

This is using the [ar-drone](https://github.com/felixge/node-ar-drone) library for receiving commands, but you can send it more commands if you need to. 

# How it works

It intercepts UDP messages and passes them to a server displaying a 3d version of a drone

# Setup

```bash
npm install 
```

This will install my forked version of ar-drone because I have it working with my simulator and pending pull requests 

# Simulate

Start the drone

```bash
node drone.js
```

Start the repl and start sending commands to it

```bash
DEFAULT_DRONE_IP=127.0.0.1 node repl.js
```

You can see the commands coming in as you type the different ar-drone commands. 

# Web View

Right now we are working on activating the web view (in progress)

# Collaborator

Let me know if you wish to collaborate

# Resources

* [dgram](http://nodejs.org/api/dgram.html)

