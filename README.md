#  Requests cost measurement

# Description
...

You can check the report folder! And all the local run tests

## Multi servers test

Don't forget `npm install`

There is a server, and a test script

Launch the server by

```sh
npm run startServer
```

Launch the test (with report printing) with

```sh
npm run startOnServerTest
```

The server can be put on a separate server! (VPS)

And the test can be launched from a local machine or another server (VPS)!

And of course the server need to be launched first!

**Config**
To be noted too there is the `config.ts` file on `src/multiRealServerTest` That you need to change! To setup the server port! And connect the script to the server.

It's nice to test on the production environment!

Share with us the results with the platform description to add them to the report section!

We gonna include a digital ocean vps to vps execution report! (That's you Salim hhh)


## Local test

One full test. All run through a one script! And in local!

The Sever is spawn on another process! But all run in the same machine! And all end with the test ending!

To run this execute

```sh
npm run test
```
