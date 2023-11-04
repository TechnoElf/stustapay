# FSEI Paket
# lukas.lischke 08/27/2015 Aktualisiert 09/14/2015
# URL: git via https://git.fs.ei.tum.de/fsei/latex, ehemals svn co http://svn.fs.ei.tum.de/repos/latex/fsei.cwl
# Kile Paket für Autocompletion der FSEI Paket Befehle

#fseipage commands
\documentclass[dynamic-thin-normal-largehead,letterfoot-nofoot,auto-manualmark,copy,colouredlogo,noeV]{fseipage}
\usedlogoname
\fseititle{Titel}
\fseititlepage

#fseiprotokoll commands
\protokollinfo{Ort}{Zeit}{Sitzungsleitung}{Protokollant}
\tagesordnung
\fseiprotokoll{Title}{Protokollsammlungseintrag}{Ort}{Datum Zeit}{Sitzungsleitung}{Protokollant}
\fseiMVeinladung{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\fseiMVprotokoll{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\fseiSonderMVprotokoll{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\fseiFVVeinladung{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\fseiFVVprotokoll{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\fseiSonderFVVprotokoll{Ort}{Datum}{Uhrzeit}{Sitzungsleitung}{Protokollant}
\protokollsammlung{Titel}
\fseitop{Titel}
\fseitop[Referent]{Titel}
\fseitop*{Uhrzeit}{Titel}
\fseitop*[Referent]{Uhrzeit}{Titel}
\begin{beitragsliste}\beitrag{Thema}
\begin{beitragsliste}\beitrag[Sprechender]{Thema}
\begin{beitragsliste}\beitrag*{Thema}
\begin{beitragsliste}\beitrag*[Sprechender]{Thema}
\end{beitragsliste}
\beitrag{Thema}
\beitrag[Sprechender]{Thema}
\beitrag*{Thema}
\beitrag*[Sprechender]{Thema}
\kommentar{Sprechender}
\frage{Sprechender}
\antwort{Sprechender}
\fseiende{Zeit}
\fseiende[der Sitzung]{Zeit}
\themenwechsel
\einschub{Inhalt}
\anwesenheit{hh:mm}{Wer, Was}{Mitglieder}{Stimmen}{Gaeste}
\arbauf{Thema}{Zuständiger}{Erstellungsdatum}{Abschlussdatum}
\arbauf[Detailbeschreibung]{Thema}{Zuständiger}{Erstellungsdatum}{Abschlussdatum}
\setcounter{stimmen}{Stimmenzahl}
\setcounter{gaeste}{Gästezahl}
\setcounter{mitglieder}{Mitgliederanzahl}
\fseinothomepage{Text der nicht auf der Homepage erscheint}
\fseinothomepage[Alternativer Text für die Homepage]{Text der nicht auf der Homepage erscheint}
\fseiintern{Text erscheint nur im internen Protokoll}
\fseiintern[Alternativer Text für normales Protokoll]{Text erscheint nur im internen Protokoll}
\anlage{Bezeichnung}{PDF Datei}
\anlagen

#Common Packages Commands
\titelei{Ort}{Datum}{Zeit}{Sitzungsleitung}{Protokollant}
\beschluss{fuer}{gegen}{enthaltung}
\beschlussextended{fuer}{gegen}{enthaltung}{Bezeichnung zus. Opt.}{Stimmen zus. Opt.}
\protokollonly{Text nur fürs Protokoll/nicht in der Tagesordnung}
\email{Mailadresse}

#Rechnung Commands
\begin{Rechnung}[X(ohne Steuer,default),N(netto),B(brutto)]
\begin{Rechnung*}[X(ohne Steuer,default),N(netto),B(brutto)]
\begin{Rechnung}[X(ohne Steuer,default),N(netto),B(brutto)]\Artikel{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\begin{Rechnung*}[X(ohne Steuer,default),N(netto),B(brutto)]\Artikel{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\begin{Rechnung}[X(ohne Steuer,default),N(netto),B(brutto)]\Artikel[e]{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\begin{Rechnung*}[X(ohne Steuer,default),N(netto),B(brutto)]\Artikel[e]{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\end{Rechnung}
\begin{Bestellung}
\begin{Bestellung*}
\end{Bestellung}
\Waehrung{Währungszeichen}
\Euro
\EinzelpreisEin
\EinzelpreisAus
\PositionAus
\PositionEin
\TrennerEin
\TrennerAus
\Gesamtsumme
\Steuersatz{normal}{ermässigt}
\Mehrwertsteuer
\Versandkosten{Preis}
\Versandkosten[e(ermäßigter Steuersatz)]{Preis}
\Artikel{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\Artikel[e(ermäßigter Steuersatz)]{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\Posten{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
\Posten[e(ermäßigter Steuersatz))]{Anzahl}{Artikelnummer}{Bezeichnung}{Preis}
