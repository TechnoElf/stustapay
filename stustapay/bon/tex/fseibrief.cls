%% fseibrief.cls
%% (c) 2003 Simon 'corecode' Schubert
%% (c) 2006-2008 Fachschaft Elektro- und Informationstechnik
%%
%% Last Changes
%% Simon 'corecode' Schubert, 17.07.2003
%% Wolfgang Fritz, 28.10.2006
%% Jonas Baehr, Tobias Blank, 14.11.2006
%% Jonas Baehr, 18.1.2008 - Kopf und Fuss nach fseipage ausgelagert
%% Jonas Baehr, 22.5.2009 - added "copy" option to create a "Kopie" watermark on every page
%%
%% Briefvorlage fuer Briefe der FSEI
\ProvidesClass{fseibrief}[2008/05/22 LaTeX2e class]

\typeout{Document Class 'fseibrief' (c) 2003-2020 Fachschaft EI, TUM}
\typeout{}

\newif\if@assosuffix \@assosuffixtrue
\DeclareOption{noeV}{\@assosuffixfalse \PassOptionsToPackage{\CurrentOption}{fseipage}}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{dinbrief}}
\ProcessOptions\relax
\LoadClass{dinbrief}

\usepackage{graphicx}
\usepackage{wrapfig}

% definiert Logos, Kopf- und Fußzeilen
% optionen zu fseipage
% -ohne- normaler (zweizeiliger) header mit 2.5cm hohem Logo ("Fachschaft...") und Seitenzahl im Fuß
% "letterfoot" Andresse, Kontakt- und Bankdaten im Fuß
% "nofoot" leerer Fuß, ohne Seitenzahl
% "thinhead" schmaler (einzeiliger) header mit 7mm hohem Logo ("Fachschaft...")
% "dynamichead" schmaler (einzeiliger) header mit 7mm hohem Logo und Subject (z. B. "Rechnung 42/08")
\usepackage[thinhead,letterfoot]{fseipage}
% Anstand zwischen Kopfzeile und Textkörper - für die erste Seite irrelevant
\addtolength{\headsep}{25pt} % scheint beim dinbrief irgendwie null zu sein
\addtolength{\textheight}{-25pt} % Ausgleich für den Textkörper

% rename the original \subject and redefine it to also set the headmark
% Note: this requires the option 'dynamichead' for the fseipage package
\let\dinbriefsubject=\subject
\renewcommand{\subject}[1]{
  \manualmark
  \markright{#1}
  \dinbriefsubject{#1}
}

% redefine the opening macro to hook an \enlargethispage into the dinbrief on page one
\let\dinbriefopening=\opening
\renewcommand{\opening}[1]{
  \dinbriefopening{#1
  % HACK enlarge the first page (this is the one where this macro is displayed)
  % by the value we globay reduced the \textwidth to adjust the larger head
  % however, on this first site the normal head is not displayed so we need
  % no correction
  \enlargethispage{\trafoheight}
  }
}

% nach DIN 676
\setaddressllvpos{88.0truemm}
\setaddressllhpos{24.1truemm}
\setaddressheight{35.0truemm}
\setaddresswidth{80.0truemm}
\setaddressoffset{1truemm}
\setbackaddressheight{6truemm}

\backaddress{%
  \fontfamily{phv}
  \parbox[b]{\addrwd}{%
    \fontfamily{phv}\selectfont%
    \vspace{1truemm}
      Fachschaft Elektrotechnik und Informationstechnik\if@assosuffix\ e.\,V.\fi\\
      TU M\"unchen, 80290 M\"unchen
    \vspace{1truemm}
  }
}

% Großes Logo für den Briefkopf (aus fseipage):
\address{\largelogoheader}

% Fußzeile mit Anschrift, Kontakt- und Bankdaten (aus fseipage):
\bottomtext{\letterfoot}

\place{M\"unchen}
\endinput

%% vim:ft=tex:sts=2:sw=2
