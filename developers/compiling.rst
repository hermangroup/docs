.. meta::
   :description: Compile Historia Core for Linux, macOS, Windows and Gitian deterministic builds
   :keywords: historia, build, compile, linux, Jenkins, macOS, windows, binary, Gitian, developers

.. _compiling-historia:

===================
Compiling Historia Core 
===================

While Historia offers stable binary builds on the `website
<https://historia.network/wallets>`_ and on `GitHub
<https://github.com/HistoriaOffical/historia/releases>`_, and development builds
using `Jenkins <https://jenkins.historia.network/blue/organizations/jenkins/HistoriaOffical-historia-gitian-nightly/activity/>`_, 
many users will also be interested in building Historia binaries for
themselves. This process has been greatly simplified with the release of
Historia Core 0.13.0, and users who do not required deterministic builds can
typically follow the `generic build notes <https://github.com/HistoriaOffical/historia/blob/develop/doc/build-generic.md>`__
available on GitHub to compile or cross-compile Historia for any platform.

The instructions to build Historia Core 0.12.3 or older are available `here
<https://docs.historia.network/en/0.12.3/developers/compiling.html>`__ on a
previous version of this page.

.. _gitian-build:

Gitian
======

Gitian is the deterministic build process that is used to build the Historia
Core executables. It provides a way to be reasonably sure that the
executables are really built from the source on GitHub. It also makes
sure that the same, tested dependencies are used and statically built
into the executable. Multiple developers build the source code by
following a specific descriptor ("recipe"), cryptographically sign the
result, and upload the resulting signature. These results are compared
and only if they match, the build is accepted and uploaded to historia.network.

Instructions on how to build Historia Core 0.13.0 will appear here once the
Docker build system for Gitian is available. Instructions to create
deterministic builds of Historia Core 0.12.3 or older are available `here
<https://docs.historia.network/en/0.12.3/developers/compiling.html#gitian-build>`__ 
on a previous version of this page.
