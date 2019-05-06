.. meta::
   :description: Historia testnet and devnets are used by Historia developers for testing using tHISTORIA
   :keywords: historia, masternodes, testnet, devnet, faucet, masternodes, testing, pool, explorer, mining pools, block explorer

.. _testnet:

===================
Testnet and devnets
===================

Testnet is a fully functioning Historia blockchain with the one key
exception that because the Historia on the network can be created freely, it
has no value. This currency, known as tHISTORIA, can be requested from a
faucet to help developers test new versions of Historia, as well as test
network operations using identical versions of the software before they
are carried out on the mainnet. There are a few other key differences:

- Testnet operates on port 19999 (instead of 9999)
- Testnet addresses start with "y" instead of "X", ADDRESSVERSION is 140
  (instead of 76)
- Testnet balances are denominated in tHISTORIA (instead of HISTORIA)
- Protocol message header bytes are 0xcee2caff (instead of 0xbf0c6bbd)
- Bootstrapping uses different DNS seeds: test.dnsseed.masternode.io, 
  testnet-seed.darkcoin.qa, testnet-seed.HistoriaOffical.io
- Launching Historia Core in testnet mode shows an orange splash screen

To start Historia Core in testnet mode, find your historia.conf file and enter
the following line::

  testnet = 1

With the release of Historia Core 12.3, Historia added support for a great new
feature — **named devnets**. Devnets are developer networks that combine
some aspects of testnet (the global and public testing network) and some
aspects of regtest (the local-only regression testing mode that provides
controlled block generation). Unlike testnet, multiple independent
devnets can be created and coexist without interference. For practical
documentation on how to use devnets, see the `developer documentation
<https://historia-docs.github.io/en/developer-examples#devnet-mode>`__ or
this `blog post <https://blog.historia.network/historia-devnets-bc27ecbf0085>`__.

Tools and links
===============

The links below were collected from various community sources and may
not necessarily be online or functioning at any given time. Please join
`Historia Nation Discord <http://historiachat.org>`_ or the `Historia Forum
<https://historia.network/forum/>`_ if you have a question relating to a
specific service.

- **Test builds:** https://jenkins.historia.network/blue/
- **Bugtracker:** https://github.com/HistoriaOffical/historia/issues/new
- **Discussion and help:** https://historia.network/forum/topic/testing.53/
- **Masternode tools:** https://test.historianinja.pl/masternodes.html
- **Android wallet:** https://historia.network/forum/threads/historia-wallet-for-android-v5-testnet.14775/
- **Testnet for Bitcoin:** https://en.bitcoin.it/wiki/Testnet

Faucets
-------

- http://test.faucet.masternode.io - by coingun
- http://faucet.test.historia.crowdnode.io - by ndrezza
- https://test.faucet.historianinja.pl - by elbereth

Explorers
---------

- http://insight.test.historia.crowdnode.io
- https://testnet-insight.historiaevo.org/insight

Pools
-----

- https://test.pool.historia.network [stratum+tcp://test.stratum.historia.network] - by flare
- http://test.p2pool.historia.siampm.com [stratum+tcp://test.p2pool.historia.siampm.com:17903] by thelazier
- http://p2pool.historianinja.pl:17903/static - by elbereth
- http://test.p2pool.masternode.io:18998/static - by coingun

Masternodes
===========

Installing a masternode under testnet generally follows the same steps
as the :ref:`mainnet masternode installation guide <masternode-setup>`,
but with a few key differences:

- You will probably be running a development version of Historia instead of
  the stable release. See `here <https://jenkins.historia.network/blue/organizations/jenkins/HistoriaOffical-historia-gitian-nightly/activity>`__
  for a list of builds, then choose the latest successful build and
  click **Artifacts** to view a list of binaries.
- When opening the firewall, port 19999 must be opened instead of (or in
  addition to) 9999. Use this command: ``ufw allow 19999/tcp``
- Your desktop wallet must be running in testnet mode. Add the following
  line to *historia.conf*: ``testnet = 1``
- When sending the collateral, you can get the 1000 tHISTORIA for free from
  a faucet (see above)
- You cannot use historiaman to install development versions of Historia. See
  the link to downloadable builds above.
- Your masternode configuration file must also specify testnet mode. Add
  the following line when setting up *historia.conf* on the masternode:
  ``testnet = 1``
- As for mainnet masternodes, the RPC username and password must contain
  alphanumeric characters only
- When cloning sentinel, you may need to clone the development branch
  using the ``-b`` option, for example: ``git clone -b core-v0.12.2.x
  https://github.com/HistoriaOffical/sentinel.git``
- Once sentinel is installed, modify
  ``~/.historiacore/sentinel/sentinel.conf``, comment the mainnet line and
  uncomment: ``network=testnet``
- The wallet holding the masternode collateral will expect to find the
  ``masternode.conf`` file in ``~/.historiacore/testnet3/masternode.conf``
  instead of ``~/.historiacore/masternode.conf``.

Testnet 0.13.0
==============

In November 2018, the Historia team announced the start of testing of the
upcoming Historia 0.13.0 release. Extensive internal testing has already been
done on the 0.13.0 code, but there are numerous bugs that can only be
revealed with actual use by real people. The Historia team invites anybody
who is interested to download the software and become active on testnet.
This release includes:

- Automatic InstantSend for Simple Transactions
- Deterministic Masternode List
- 3 Masternode Keys: Owner, Operator and Voting
- Special Transactions
- PrivateSend Improvements

Discussion: 

- Testnet announcement: https://blog.historia.network/product-brief-historia-core-release-v0-13-0-5d7fddffb7ef
- Product brief: https://blog.historia.network/product-brief-historia-core-release-v0-13-0-5d7fddffb7ef
- Testnet tools: https://docs.historia.network/en/latest/developers/testnet.html
- Issue tracking: https://github.com/HistoriaOffical/historia/issues/new

Latest test binaries:

- https://github.com/HistoriaOffical/historia/releases/tag/v0.13.0.0-rc11

Testnet 0.12.3
==============

In June 2018, the Historia team announced the start of testing of the
upcoming Historia 0.12.3 release. Extensive internal testing has already been
done on the 0.12.2 code, but there are numerous bugs that can only be
revealed with actual use by real people. The Historia team invites anybody
who is interested to download the software and become active on testnet.
This release includes:

- Named Devnets, to help developers quickly create multiple independent
  devnets
- New format of network message signatures
- Governance system improvements
- PrivateSend improvements
- Additional indexes cover P2PK now
- Support for pruned nodes in Lite Mode
- New Masternode Information Dialog

Discussion:

- https://historia.network/forum/threads/v12-3-testing.38475
- Testnet tools: https://docs.historia.network/en/latest/developers/testnet.html
- Issue tracking: https://github.com/HistoriaOffical/historia/issues/new

Latest test binaries:

- https://github.com/HistoriaOffical/historia/releases/tag/v0.12.3.0-rc3


Testnet 0.12.2
==============

In October 2017, the Historia team announced the launch of a testnet for
public testing of the upcoming 0.12.2 release of the Historia software.
Extensive internal testing has already been done on the 0.12.2 code, but
there are numerous bugs that can only be revealed with actual use by
real people. The Historia team invites anybody who is interested to download
the software and become active on testnet. This release includes:

- DIP0001 implementation https://github.com/HistoriaOffical/dips/blob/master/dip-0001.md
- 10x transaction fee reduction (including InstantSend fee)
- InstantSend vulnerability fix
- Lots of other bug fixes and performance improvements
- Experimental BIP39/BIP44 complaint HD wallet (disabled by default, should be fully functional but there is no GUI yet)

Discussion:

- Testnet 12.2 discussion: https://historia.network/forum/threads/v12-2-testing.17412/
- Testnet tools: https://historia.network/forum/threads/testnet-tools-resources.1768/
- Issue tracking: https://github.com/HistoriaOffical/historia/issues/new

Latest successfully built develop branch binaries:

- Historia Core: https://jenkins.historia.network/blue/organizations/jenkins/HistoriaOffical-historia-gitian-nightly
- Sentinel: https://github.com/HistoriaOffical/sentinel/tree/develop
