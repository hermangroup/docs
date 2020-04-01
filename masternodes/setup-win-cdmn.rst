.. meta::
   :description: This guide describes how to set up a Historia masternode. It also describes various options for hosting and different wallets
   :keywords: historia, guide, masternodes, setup,

.. _masternode-setup:

=====================================================================
Setup For Windows 
=====================================================================

Setting up a masternode requires a basic understanding of Windows and blockchain technology, as well as an ability to follow instructions closely. It also requires regular maintenance and careful security. There are some decisions to be made along the way, and optional extra steps to take for increased security.

Before you begin
================

This guide assumes you are setting up a single masternode for the first
time. You will need:

- 5000 HTA (Content Distribution Masternode)
- A wallet to store your Historia, preferably a hardware wallet, although Historia Core wallet is also supported
- A Windows 10 or Windows Server instance. [Can be a PC or VPS]
- Static IPv4 address on Windows or Port Forwarding setup over the router
[ Since we are assuming this is a home network, ports need to be publicly open on the Internet. This normally requires Port Forwarding on your router, which is out of scope for this document. Use your favorite search engine to research Port Forwarding. ]
- Nginx or any SSL support Webserver
- IPFS [Oprational Daemon]
- Your own DNS name
- TCP Ports : [Need to be allowed on Firewall]
         - TCP Port 10101
         - TCP Port 8080
         - TCP Port 5001
         - TCP Port 4001
         - TCP Port 443

Masternode Roles
----------------

Unlike most other masternode coins, Historia makes use of a role based masternode system. Currently there are two roles:
 - Content Distribution Masternode 
 
   - Collateral Requirement: 5000 HTA
   - Reward: 25% per block - increaes 2.5% every 2 months until 50% per block
   - Ports: TCP 10101, TCP 4001, TCP 5001, TCP 8080, TCP 443
   - IPFS Required: Yes
   - IPv4 address required

In this guide, we will setup a Content Distribution Masternode (CDMN) with collateral of 5000. 

Set up your VPS 
===============================
A VPS, more commonly known as a cloud server, is fully functional installation of an operating system operating within a virtual machine. The virtual machine allows the VPS provider to run multiple systems on one physical server, making it more efficient and much cheaper than having a single operating system running on the “bare metal” of each server. A VPS is ideal for hosting a Historia masternode because they typically offer guaranteed uptime, redundancy in the case of hardware failure and a static IP address that is required to ensure you remain in the masternode payment queue. While running a masternode from home on a desktop computer is technically possible, it will most likely not work reliably because most ISPs allocate dynamic IP addresses to home users.
We will use Vultr hosting as an example of a VPS. First create an account and add credit. Then go to the Servers menu item on the left and click + to add a new server. Select a location for your new server on the following screen.

.. figure:: /masternodes/img/server-location.png
   :width: 300px
   
   Select Windows as the server type.
.. figure:: /masternodes/img/server-type1.png
   :width: 300px
   
   Select a server size offering at least 2GB of memory.
.. figure:: /masternodes/img/server-type2.png
   :width: 300px 
   
   Enter a hostname and label for your server. In this example we will use htamn01 as the hostname.
.. figure:: /masternodes/img/server-name.png
   :width: 300p
   
   Add IPv6 for your server. IPv6 isn’t required but nice to have.
.. figure:: /masternodes/img/server-ipv6.png
   :width: 300p
   
   Vultr will now install your server. This process may take a few minutes.
.. figure:: /masternodes/img/server-location.png
   :width: 300p
   
   Click Manage when installation is complete and take note of the IPv4 address, username and password.
.. figure:: /masternodes/img/server-management.png
   
Setup Firewall 
===============================
To make communication possible you need to allow following TCP ports through your firewall.

.. figure:: /masternodes/img/firewall-1-2-3.png
   
.. figure:: /masternodes/img/firewall-4-5.png
      
.. figure:: /masternodes/img/firewall-6-7.png
   
.. figure:: /masternodes/img/firewall-8-9.png
   
   
[ Optional Recommendation : add 8GB to your windows virtual memory ]

Setup Domain Name System (DNS) A Record
===============================
Historia requires a DNS name set to enabled SSL for your IPFS node that will be setup below. This is beyond the scope of this document, but there is plenty of documentation online on how to do this. Find a cheap DNS registrar and create a A record that points to the IP address of your VPS. Namecheap.com or GoDaddy.com are options for this. This can be any top level domain, such as .xyz ($0.88 annually) or .fun ($1.00 annually), so get this cheapest domain you can get.
Remember that if you live in a oppressive country, your name will be associated with your DNS record in the global WHOIS database. Some DNS providers such as ionos.com will give a DNS name privacy for free with domain registration. But they would still be required to hand over your domain name information via court order. Another option is using one of the new blockchain DNS systems such as unstoppabledomains.com, and using crypto currency to purchase your domain name. However we have not tested using a blockchain DNS system yet.

Option 1: A Record – NS Zone
----------------
.. figure:: /masternodes/img/Domain-NS_Zone.png


Option 2: Child Name – Domain Panel
----------------
.. figure:: /masternodes/img/Domain-child.png



Install Historia Windows Wallet
===============================
You MUST use Historia 0.17.0.2 or later, otherwise this process will fail. https://github.com/HistoriaOffical/historia/releases/

Download the correct Windows Historia setup file from the previous URL. Once downloaded, run the Historia installer and install the Historia wallet. Open the wallet and let the blockchain sync completely.


Send the collateral
===================

A Historia address with a single unspent transaction output (UTXO) of exactly 5000 HTA is required to operate a Voting Masternode. 
Once it has been sent, various keys regarding the transaction must be extracted for later entry in a configuration file. 
A masternode can be started from the official Historia Core wallet. This guide will describe the steps for Historia Core.

Option 1: Sending from Historia Core wallet
-------------------------------------------

Open Historia Core wallet and wait for it to synchronize with the network.
It should look like this when ready:

.. figure:: /img/Picture10.png
   :width: 400px

   Fully synchronized Historia Core wallet

Click **Tools > Debug console** to open the console. Type the following
two commands into the console to generate a new Historia address for the collateral::

  getnewaddress
  HBvcjyzWmt9x9QJNVDyxezhxSXcWEDEdsS

Take note of the masternode private key and collateral address,
since we will need it later. The next step is to secure your wallet (if
you have not already done so). First, encrypt the wallet by selecting
**Settings > Encrypt wallet**. You should use a strong, new password
that you have never used somewhere else. Take note of your password and
store it somewhere safe or you will be permanently locked out of your
wallet and lose access to your funds. Next, back up your wallet file by
selecting **File > Backup Wallet**. Save the file to a secure location
physically separate to your computer, since this will be the only way
you can access our funds if anything happens to your computer.

Content Distribution Masternode (CDMN) - Collateral 5000
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If setting up a Content Distribution Masternode (CDMN), send exactly 5000 HTA in a single transaction to the new address
you generated in the previous step. This may be sent from another
wallet, or from funds already held in your current wallet. 

Check Transaction
-----------------
Once the transaction is complete, view the transaction in a `blockchain explorer
<http://blockexplorer.historia.network/>`_ by searching for the address. You
will need 15 confirmations before you can start the masternode, but you
can continue with the next step at this point already: installing Historia
Core on your VPS.

.. _masternode-setup-install-historiacore:

Next, setup the historia.conf files by selecting Tools > Open Wallet Configuration File.

A text editor window will appear. We now need to create a configuration file specifying several variables. Copy and paste the following text into the Wallet Configuration file, then replace the variables specific to your configuration as follows::


  #----
  rpcuser=XXXXXXXXXXXXX
  rpcpassword=XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  rpcallowip=127.0.0.1
  #----
  listen=1
  server=1
  daemon=1
  #----
  #masternode=1
  #masternodeblsprivkey=
  #masternodecollateral=5000
  externalip=XXX.XXX.XXX.XXX:10101
  #----

Replace the fields marked with ``XXXXXXX`` as follows:

- ``rpcuser``: enter any string of numbers or letters, no special
  characters allowed
- ``rpcpassword``: enter any string of numbers or letters, no special
  characters allowed
- ``masternodecollateral``: 100 or 5000 depending on if you are setting up a Voting Masternode or Content Distribution Masternode. For this guide set this to 5000.
- ``externalip``: this is the IPv4 address of your VPS

Save the historia.conf file in the default location and exit the text editor.::

   C:\Users\<yourusername>\AppData\Roaming\HistoriaCore\ 


Setup IPFS
================


Install Sentinel
================

Download and install Sentinel for Windows
https://github.com/HistoriaOffical/sentinel/releases

Open command prompt

Create new sentinel directory in your HistoraCore directory::

   mkdir cd C:\Users\<yourusername>\AppData\Roaming\HistoriaCore\sentinel

And copy sentinel.exe to the newly created sentinel directory::

   cd C:\Users\<yourusername>\AppData\Roaming\HistoriaCore\sentinel\sentinel.exe

Create new file in the sentinel directory named sentinel.conf::

   cd C:\Users\<yourusername>\AppData\Roaming\HistoriaCore\sentinel\

Edit file and paste the following into the sentinel.conf file::
 
   network=mainnet  
   db_name=database/sentinel.db  
   db_driver=sqlite


Setup Task for Sentinel
-----------------------

Run Task Scheduler  

Create Task -> General Tab - Name: Sentinal

.. figure:: ../img/1.PNG
   :width: 400px

Settings:

   - Trigger Tab -> New (Trigger)  
   - Settings -> Repeat Daily  
   - Recur Every: 1 day  
   - Advanced Settings:  
   - Repeat Task Every: 1 Minute (Notice you have to select 5 minutes from the drop down, then edit the 5 to 1)  
For a duration of:Indefinitely  

.. figure:: ../img/2.PNG
   :width: 400px

Settings:

   - Actions Tab -> New (Action)  
   - Program/script -> Browse to::
   
      C:\Users\<yourusername>\AppData\Roaming\HistoriaCore\sentinel\sentinel.exe  

Click Ok  

.. figure:: ../img/3.PNG
   :width: 400px

Settings:

   - Conditions Tab -> Power  
   - Uncheck box for "Start task only if the computer is on AC Power"  

Click Ok  

.. figure:: ../img/4.PNG
   :width: 400px


.. _start-masternode:
Start your masternode
---------------------

Depending on how you sent your masternode collateral, you will need to start your masternode with a command sent by the Historia Core wallet. Before you continue, you must ensure that your 100 HTA collateral transaction has at least 15 confirmation, and that historiad is running and fully synchronized with the blockchain on your masternode. See the previous step for details on how to do this. During the startup process, your masternode may pass through the following states:

- ``MASTERNODE_SYNC``: This indicates the data currently being synchronised in the masternode
- ``MASTERNODE_SYNC_FAILED``: Synchronisation could not complete, check your firewall and restart historiad
- ``WATCHDOG_EXPIRED``: Waiting for sentinel to restart, make sure it is entered in crontab
- ``NEW_START_REQUIRED``: Start command must be sent from wallet; check IPFS is running.
- ``PRE_ENABLED``: Waiting for network to recognize started masternode
- ``ENABLED``: Masternode successfully started
- ``IPFS_EXPIRED``: This indictates that IPFS is not running.
- ``EXPIRED``: Masternode has expired. Restart Historiad, restart masternode, check IPFS is running.

If you masternode does not seem to start immediately, do not arbitrarily issue more start commands. Each time you do so, you will reset your position in the payment queue.

Identify the funding transaction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you used an address in Historia Core wallet for your collateral
transaction, you now need to find the txid of the transaction. Click
**Tools > Debug console** and enter the following command::

  masternode outputs

This should return a string of characters similar to this::

  {
  "06e38868bb8f9958e34d5155437d009b72dff33fc28874c87fd42e51c0f74fdb" : "1",
  }

The first long string is your transaction hash, while the last number is the index. We now need open Tool -> Open Masternode Configure file for this wallet in order to be able to use it to issue the command to start your masternode on the network. 

- ``Label``: Any single word used to identify your masternode, e.g. MN1
- ``IP and port``: The IP address and port (usually 10101) configured in the Historia.conf file, separated by a colon (:)
- ``Masternode private key``: This is the result of your masternode genkey command earlier, also the same as configured in the Historia.conf file
- ``Transaction hash``: The txid we just identified using masternode outputs
- ``Index``: The index we just identified using masternode outputs
- ``IPv6 Address``: The public IPv6 address required for Content Distribution Masternode. Set this to the IPv6 address of your VPS.
- ``IPFS Peer ID``: The public IPFS peer id of your IPFS daemon required for Content Distribution Masternode. Set this to you IPFS peer id you get after setting up IPFS. You get this from :ref:`Setup IPFS <ipfs-setup>`.

Content Distribution Masternode - Collateral 5000
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If Content Distribution Masternode, enter all of this information on a single line with each item separated by a space, for example::

   MN1 52.14.2.67:10101 XrxSr3fXpX3dZcU7CoiFuFWqeHYw83r28btCFfIHqf6zkMp1PZ4 06e38868bb8f9958e34d5155437d009b72dff33fc28874c87fd42e51c0f74fdb 0 2001:19f0:7001:6de:5400:1ff:fef3:8735 QmVjkn7yEqb3LTLCpnndHgzczPAPAxxpJ25mNwuuaBtFJD

Save this file and close the text editor. It should be saved in:: 

   C:\Users\<yourusername>\AppData\Roaming\HistoriaCore folder.

Shut down and restart Historia Core wallet. Let the Historia Core wallet fully sync. Historia Core will recognize masternode.conf during startup, and is now ready to activate your masternode. Go to **Settings > Unlock Wallet** and enter your wallet passphrase. Then click **Tools > Debug** console again and enter the following command to start your masternode (replace MN1 with the label for your masternode)::

   masternode start-alias MN1


At this point you can go back to your **Tools > Debug** window and monitor your masternode by entering:: 

   masternode status 

You will probably need to wait around 30 minutes as the node passes through the PRE_ENABLED stage and finally reaches ENABLED. Give it some time.
At this point you can safely log out of your server by typing exit. Congratulations! Your masternode is now running.

