.. meta::
   :description: How to install and create a new Historia Electrum wallet on Windows, Linux, macOS and Android
   :keywords: historia, mobile, wallet, electrum, android, linux, windows, macos, installation, compile

.. _electrum-installation:

============
Installation
============

Download
========

You can download Historia Electrum from the official Historia website or the
Historia Electrum minisite.

- https://historia.network/wallets
- https://electrum.historia.network

Historia Electrum is developed by community member **akhavr** and is
released through his GitHub account. 

- https://github.com/akhavr/electrum-historia/releases

You can optionally verify the integrity of your download by running the
following commands (example for Linux)::

  wget https://github.com/akhavr/electrum-historia/releases/download/3.2.3.1/Historia-Electrum-3.2.3.1.tar.gz
  sha256sum https://github.com/akhavr/electrum-historia/releases/download/3.2.3.1/Historia-Electrum-3.2.3.1.tar.gz
  wget https://github.com/akhavr/electrum-historia/releases/download/3.2.3.1/SHA256SUMS.txt.asc
  cat SHA256SUMS.txt.asc

You can also optionally verify the authenticity of your download as an
official release by akhavr. All releases of Historia Electrum are signed by
akhavr using GPG with the key ``64A3 BA82 2F44 9D50``, `verifiable here
on Keybase <https://keybase.io/akhavr>`_. Import the key, download the
ASC file for the current release of Historia Electrum and verify the
signature as follows::

  curl https://keybase.io/akhavr/pgp_keys.asc | gpg --import
  gpg --verify SHA256SUMS.txt.asc


Linux
-----

Historia Electrum for Linux is available from a PPA for Ubuntu and Linux
Mint, and as a source tarball for other systems. As of version 3.0.6, it
requires Python 3 to run. Enter the following commands to install from
PPA::

  sudo add-apt-repository ppa:akhavr/historia-electrum
  sudo apt update
  sudo apt install electrum-historia

Enter the following commands (changing the version number to match the
current version as necessary) in the terminal to install Historia Electrum
from the source tarball::

  sudo apt install python3-pyqt5 python3-pip python3-setuptools
  wget https://github.com/akhavr/electrum-historia/releases/download/3.0.6.3/Electrum-HISTORIA-3.0.6.3.tar.gz
  tar -zxvf Electrum-HISTORIA-3.0.6.3.tar.gz
  cd Electrum-HISTORIA-3.0.6.3
  sudo python3 setup.py install


macOS
-----

Simply download and run the DMG file. You may need to grant permission
to install, depending on your security settings. Click through the
installation wizard and run Historia Electrum from your Applications folder
when complete.


Windows
-------

Simply download and run the installer file to set up Historia Electrum. You
may need to grant permission to install, depending on your security
settings. Click through the installation wizard and run Historia Electrum
from the Start menu when complete.

Android
-------

Download and run the APK file from https://electrum.historia.network to set up
Historia Electrum. You may need to grant permission to install from unknown
sources, depending on your security settings. Click through the
installation wizard and run Historia Electrum when complete.


Creating a New Wallet
=====================

Historia Electrum gathers configuration data when run for the first time.
For more on the concepts behind this process, skip to the later sections
of this guide discussing backups, security, and addresses. When setting
up Historia Electrum for the first time, a wizard will guide you through the
process of creating your first wallet. The first screen asks how you
would like to connect to the remote server. Select **Auto connect** and
click **Next** to continue. You will see a notice that no wallet
currently exists. Enter a name for your wallet (or accept the default
name) and click **Next** to create your wallet.

.. image:: img/connect.png
   :width: 400px

.. figure:: img/create-wallet.png
   :width: 400px

   Selecting the server and naming your first wallet

You will be asked what kind of wallet you want to create. Choose between
**Standard wallet**, **Multi-signature wallet** and **Watch Historia
addresses**. If you are unsure, select **Standard wallet** and click
**Next** to continue. You will then be asked how you want to
store/recover the seed. If stored safely, a seed can be used to restore
a lost wallet on another computer. Choose between **Create a new seed**,
**I already have a seed**, **Use public or private keys** or **Use a
hardware device**. If you are using Electrum Historia for the first time and
not restoring an existing wallet, choose **Create a new seed** and click
**Next** to continue.

.. image:: img/wallet-type.png
   :width: 400px

.. figure:: img/seed-type.png
   :width: 400px

   Selecting the wallet type and keystore

Electrum Historia will generate your wallet and display the recovery seed.
Write this seed down, ideally on paper and not in an electronic format,
and store it somewhere safe. This seed is the only way you can recover
your wallet if you lose access for any reason. To make sure you have
properly saved your seed, Electrum Historia will ask you to type it in as a
confirmation. Type the words in the correct order and click **Next** to
continue.

.. image:: img/seed-generate.png
   :width: 400px

.. figure:: img/seed-confirm.png
   :width: 400px

   Generating and confirming the recovery seed

A password optionally secures your wallet against unauthorized access.
Adding a memorable, strong password now improves the security of your
wallet by encrypting your seed from the beginning. Skipping encryption
at this point by not selecting a password risks potential theft of funds
later, however unlikely the threat may be. Enter and confirm a password,
ensure the **Encrypt wallet file** checkbox is ticked and click **Next**
to continue.

.. figure:: img/password.png
   :width: 400px

   Entering and confirming a wallet encryption password

Your Historia Electrum wallet is now set up and ready for use.

.. figure:: img/electrum.png
   :width: 400px

   Historia Electrum after setup is complete
