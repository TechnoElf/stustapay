# Dies ist das FSEI LaTeX Paket
Es beinhaltet eine Dokumentklasse mit dem Briefkopf `fseibrief` sowie eine modifizierte Version des Pakets `rechnung`.
Darüber hinaus enthält es Vorlagen für Protokolle der MV und AG Treffen.

Installation:  
`$ latex rechnung.ins`

Nun muss der Ordner `fsei` (bis auf die temporären Dateien) in den texmf-tree nach `tex/latex/` kopiert werden. Der texmf-tree befindet sich häufig in `/usr/share/texmf` o. ä.

Sollte der texmf-tree tatsächlich dort liegen, so empfielt sich die Anwendung von 
`$ sudo su`
oder die Verwendung von `sudo` vor den Kommandos, um die nötigen Rechte zu erlangen.

Am einfachsten funktioniert das durch:

1. Navigation an den Speicherort  
`$ cd /usr/share/texmf/tex/latex/`

2. Clonen des git-repositories unter Verwendung der FSEI Kennung  
`$ git clone https://git.fs.ei.tum.de/fsei/latex.git`

3. Nenne den ordner latex in fsei um  
`$ sudo mv latex fsei`

4. Aktualisierung der Pakete von LaTeX  
`$ sudo mktexlsr`
