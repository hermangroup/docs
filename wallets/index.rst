.. meta::
   :description: Description of different wallets available to use and spend Historia cryptocurrency
   :keywords: historia, wallet, core, android,  web, 

.. _wallets:

=======
Wallets
=======

Whenever you are storing objects with a market value, security is
necessary. This applies to barter systems as well as economies using
currency as a medium of exchange. While banks store balances on a
private ledger, cryptocurrencies store balances under unique addresses
on a distributed public ledger. The cryptographic private keys to access
the balance stored on each public address are therefore the object of
value in this system. This section of the documentation discusses
different practical methods of keeping these keys safe in wallets, while
still remaining useful for day-to-day needs.

.. _historia-core-wallet:

Historia Core Wallet
================

Historia Core Wallet is the full official release of Historia, and supports all
Historia features as they are released, including IPFS, Record and Proposal Storage in the governance model
InstantSend and PrivateSend, as well as an RPC console and governance features. 
Historia Core Wallet (sometimes known as the QT wallet, due to the QT software
framework used in development) is a professional or heavy wallet which
downloads the full blockchain (several GB in size), the IPFS record and proposal database,
and can operate as both a full node or masternode on the network. Because of the
requirement to hold a full copy of the blockchain, some time is required
for synchronisation when starting the wallet. Once this is done, the
correct balances will be displayed and the functions in the wallet can
be used. Historia Core Wallet is available for macOS, Linux, and Windows.

Features:

-  IPFS Intregration
-  Record and Proposal Database storage
-  PrivateSend
-  InstantSend
-  Wallet encryption
-  Coin control and fee control
-  QR code generation and address book
-  Masternode commands and voting
-  Automated backup
-  Debug console

Available documentation:

.. toctree::
   :maxdepth: 1

   historiacore/installation.rst
   historiacore/cmd-rpc.rst
   
   Historia Core Wallet

.. _historia-android-wallet:

Historia Android Wallet
===================

Historia offers a standalone wallet for Android, with development supported 
by the Historia budget. The Historia Android Wallet supports advanced Historia 
features, including contact management and InstantSend. You can scan and 
display QR codes for quick transfers, backup and restore your wallet, 
keep an address book of frequently used addresses, pay with NFC, sweep 
paper wallets and more.

.. toctree::
   :includehidden:
   :maxdepth: 1

   android/installation.rst
   android/getting-started.rst
   android/advanced-functions.rst

.. image:: android/img/android1.png
    :width: 160 px
.. image:: android/img/android2.png
    :width: 160 px

*Historia Android Wallet*


