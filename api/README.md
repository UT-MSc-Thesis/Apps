# Necessary APIs

The two APIs defined in this directory are necessary for the functioning of other parts of the system. The following explains where each one must be used. Also at the end there will be a brief guide on how to set up the IPFS peers.

## api.py

This program should be run alongside the web interface as it generates the Poseidon hash retruned inside the web interface. Without running it generating a Poseidon hash through the web interface will result in an error.

## ipfs_api.py

This program needs to be run on each of the IPFS network peers. It receives the file uploaded by care providers and pins it on the node. The current implementation is bare-bones and should not be used in production. Adding authentication to the endpoints served by this API is necessary. The "example_ipfs_api_request.py" shows how a care provider can send files to this API. Currently only a text file is being sent.

## IPFS Initial Setup

First make sure you have Go installed. Then install the Go implementation of IPFS (Kubo). Use
`ipfs init`
to initialize the IPFS node. Then use
`ipfs bootstrap rm –-all`
to remove the default bootstrap nodes as there's no need to connect to them. Now you can start the node with the
`ipfs demon`
command. Every new node that gets created and is supposed to be in the same group as this node needs to be connected to it using the
`ipfs swarm connect <multiaddr>` command to make sure they are aware of other nodes. Now by starting the ipfs_api.py from the previous section, new files can be pinned by utilizing the API.
