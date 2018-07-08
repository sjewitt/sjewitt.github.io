#!/usr/bin/perl
use CGI::Carp qw( fatalsToBrowser );
print "Content-type: text/html\r\n\r\n";
$document_root_real = $ENV{'DOCUMENT_ROOT_REAL'};
$document_root = $ENV{'DOCUMENT_ROOT'};
print $document_root_real . "<br />";
print $document_root . "<br />";

