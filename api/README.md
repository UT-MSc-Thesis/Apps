# Necessary APIs

The two APIs defined in this directory are necessary for the functioning of other parts of the system. The following explains where each one must be used.

## api.py

This program should be run alongside the web interface as it generates the Poseidon hash retruned inside the web interface. Without running it generating a Poseidon hash through the web interface will result in an error.

## ipfs_api.py

This program needs to be run on each of the IPFS network peers. It receives the file uploaded by care providers and pins it on the node. The current implementation is bare-bones and should not be used in production. Adding authentication to the endpoints served by this API is necessary. The "example_ipfs_api_request.py" shows how a care provider can send files to this API. Currently only a text file is being sent.
