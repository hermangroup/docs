.. meta::
   :description: This guide describes how to set up a IPFS for Historia masternode.
   :keywords: historia, guide, masternodes, IPFS
 
.. _ipfs-setup:

==========
Setup IPFS
==========

Running the IPFS daemon is now a required part of the masternode system. A Content Distribution Masternode - Collateral 5000 requires IPFS to run a masternode. You must follow these steps.

Install IPFS Daemon
===================

To run the IPFS Daemon you must install the Go Lang::
   
   sudo apt-get update  
   sudo apt-get install golang-go -y

Next download and install IPFS daemon. Because we have used Ubuntu 16.04 64-bit for our OS, there isn't a package for this version of Ubuntu::

   wget https://dist.ipfs.io/go-ipfs/v0.4.20/go-ipfs_v0.4.20_linux-arm64.tar.gz
   tar xvfz go-ipfs_v0.4.20_linux-amd64.tar.gz  
   sudo mv go-ipfs/ipfs /usr/local/bin/ipfs

Clean up::
   rm -rf go-ipfs/

Initialize IPFS Daemon for Historia
===================================
Since we will be using IPFS only for Historia, we can safely run the initialization::
   
   ipfs init
   
Remove Original Bootstap IPFS Nodes and Connect to Historia IPFS Swarm
======================================================================
IPFS can be bandwidth hungry, so we want to remove the IPFS bootstrap nodes and only connect to the Historia IPFS Swarm::

   ipfs bootstrap rm --all
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   ipfs bootstrap add /ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S
   
Next, download the swarm.key to authenticate to the Historia IPFS Swarm::

   cd ~/.ipfs
   wget https://github.com/HistoriaOffical/ipfs-swarmkey/blob/master/swarm.key
   
Now when you start IPFS, the IPFS daemon will now connect to the Historia IPFS swarm when started.

Edit IPFS Config
================
The default IPFS config file needs to be changed to limit memory usage, setup interfaces, and setup the IPFS Gateway. The following changes to the default config have been **bolded**:

.. parsed-literal::


   {
     "API": {
       "HTTPHeaders": {
         "Server": [
           "go-ipfs/0.4.17"
         ]
       }
     },
     "Addresses": {
       "API": "/ip4/127.0.0.1/tcp/5001",
       "Announce": [],
       "Gateway": [
         "/ip4/0.0.0.0/tcp/8080",
         "/ip6/::/tcp/8080"
       ],
       "NoAnnounce": [],
       "Swarm": [
         "/ip4/0.0.0.0/tcp/4001",
         "/ip6/::/tcp/4001"
       ]
     },
     "Bootstrap": [
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S",**
       **"/ip4/25.196.147.100/tcp/4001/ipfs/QmaMqSwWShsPg2RbredZtoneFjXhim7AQkqbLxib45Lx4S"**
     ],
     "Datastore": {
       "BloomFilterSize": 0,
       "GCPeriod": "1h",
       "HashOnRead": false,
       "Spec": {
         "mounts": [
           {
             "child": {
               "path": "blocks",
               "shardFunc": "/repo/flatfs/shard/v1/next-to-last/2",
               "sync": true,
               "type": "flatfs"
             },
             "mountpoint": "/blocks",
             "prefix": "flatfs.datastore",
             "type": "measure"
           },
           {
             "child": {
               "compression": "none",
               "path": "datastore",
               "type": "levelds"
             },
             "mountpoint": "/",
             "prefix": "leveldb.datastore",
             "type": "measure"
           }
         ],
         "type": "mount"
       },
       "StorageGCWatermark": 90,
       **"StorageMax": "50GB"**
     },
     "Discovery": {
       "MDNS": {
         "Enabled": true,
         "Interval": 10
       }
     },
     "Experimental": {
       "FilestoreEnabled": false,
       "Libp2pStreamMounting": false,
       "P2pHttpProxy": false,
       "QUIC": false,
       "ShardingEnabled": false,
       "UrlstoreEnabled": false
     },
     "Gateway": {
       "APICommands": null,
       **"HTTPHeaders": {**
         **"Access-Control-Allow-Headers": [**
           **"X-Requested-With",**
           **"Access-Control-Expose-Headers",**
           **"Range"**
         **],**
         **"Access-Control-Allow-Methods": [**
           **"POST",**
           **"GET"**
         **],**
         **"Access-Control-Allow-Origin": [**
           **"*"**
         **],**
         **"Access-Control-Expose-Headers": [**
           **"Location",**
           **"Ipfs-Hash"**
         **],**
         **"X-Special-Header": [**
           **"Access-Control-Expose-Headers: Ipfs-Hash"**
         **]**
       },
       **"NoFetch": false,**
       "PathPrefixes": [],
       "RootRedirect": "",
       "Writable": false
     },
     "Identity": {
       "PeerID": "QmVjkn7yEqb3LTLCpnndHgzczPAPAxxpJ25mNwuuaBtFJD",
       "PrivKey": "REDACTED"
        },
     "Ipns": {
       "RecordLifetime": "",
       "RepublishPeriod": "",
       "ResolveCacheSize": 128
     },
     "Mounts": {
       "FuseAllowOther": false,
       "IPFS": "/ipfs",
       "IPNS": "/ipns"
     },
     "Pubsub": {
       "DisableSigning": false,
       "Router": "",
       "StrictSignatureVerification": false
     },
     "Reprovider": {
       "Interval": "12h",
       "Strategy": "all"
     },
     "Routing": {
       "Type": "dht"
     },
     "Swarm": {
       "AddrFilters": null,
       "ConnMgr": {
         "GracePeriod": "20s",
         **"HighWater": 500,**
         **"LowWater": 50,**
         "Type": "basic"
       },
       "DisableBandwidthMetrics": false,
       "DisableNatPortMap": true,
       "DisableRelay": false,
       "EnableAutoNATService": false,
       "EnableAutoRelay": false,
       "EnableRelayHop": false
     }
   }

Create IPFS Service To Restart on Reboot or Crash
=================================================
Next, create a service for IPFS to restart on reboot or crash. Create a new service file::
   
   sudo nano  /etc/systemd/system/ipfs.service

Copy and past the below config and save the ipfs.service file. Add the username that Historia runs under to "User=". Most likely this is the user that you have created when setting up the OS.

.. parsed-literal::


   [Unit]
   Description=ipfs.service
   After=network.target
   StartLimitIntervalSec=0
   [Service]
   Type=simple
   Restart=always
   RestartSec=1
   User=<YOURUSERNAME>
   ExecStart=/usr/local/bin/ipfs daemon &
   [Install]
   WantedBy=multi-user.target
      

Start IPFS Daemon for Historia
==============================
Start the IPFS service::

   systemctl start ipfs
   
Enable the IPFS service to start on reboot::

   systemctl enable ipfs
