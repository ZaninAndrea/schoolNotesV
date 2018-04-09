---
category: "Fisica"
title: "Ipotesi atomiche e fisica quantistica"
index: 2
draft: false
---

# Capitolo 19: Dalla fisica classica alla fisica moderna
L'ipotesi dell'esistenza degli atomi fu avanzata come spiegazione del moto browninano

## La scoperta dell'elettrone
### Esperimento di Thomson: esistenza dell'elettrone
Thomson con l'esperimento del **tubo catodico** utilizzò un selettore di velocità con varie combinazioni di campi elettrici e magnetici per dimostrare che i raggi catodici sono composti da particelle con un rapporto costante $q/m$ e che queste particelle (gli elettroni) si possono ottenere con qualsiasi materiale per il catodo e sono quindi dei componenti fondamentali della materia.

![](/images/tuboCatodico.PNG)

Inizialmente gli elettroni passano attraverso i 2 elettroni senza che vi sia alcun campo magnetico, vengono deflessi e colpiscono lo schermo finale ad una distanza $\Delta y$ dalla posizione di arrivo se non vi fossero stati gli elettrodi.

Questa variazione è direttamente proporzionale all'accelerazione e al tempo di percorrenza dello spazio vuoto tra gli elettrodi e il recettore.
Il tempo di percorrenza è $L/v$, la distanza è facilmente misurabile, mentre per trovare la velocità usiamo il **selettore di velocità**.
L'accelerazione invece è $qE/m$, quindi dato che il campo elettrico è noto otteniamo una misura di $q/m$.

### Esperimento di Millikan: carica dell'elettrone
Millikan con l'esperimento della **goccia d'olio** determinò la carica dell'elettrone.

![](/images/millikan.jpeg)

Un nebulizzatore produce delle goccioline di olio cariche, che entrano attraverso una fessura nella zona tra 2 elettrodi.
Sulla gocciolina agiscono la forza di gravità, quella elettrica e l'attrito viscoso, il campo elettrico viene regolato in modo che ==le 3 forze si bilancino== (la gocciolina non accelera).

$$
\begin{aligned}
qE - Mg - 6\pi \eta r v = 0 \\
q=\frac{MG+ 6\pi \eta r v }{E}
\end{aligned}
$$

Millikan determinò indipendentemente il raggio e la massa delle goccioline, ottenendo quindi una misura della carica della gocciolina.

Ripetendo la misura su molte goccioline notò che la loro carica era positiva o negativa, ma ==sempre multipla di $e=1,6\cdot 10^{-19} C$==, che era quindi la carica elementare, quella dell'elettrone

## Modelli atomici
### Modello di Thomson
Thomson propose il **modello a panettone**: l'atomo è una sfera di materia carica positivamente nella quale sono distribuiti gli elettroni, piccoli e carichi negativamente.

Questo modello fu scartato per l'**esperimento della lamina d'oro**: Rutherford sparò della particelle alfa su un sottile foglio d'oro.

Secondo il modello di Thomson le particelle alfa data la loro pesantezza sarebbero dovute essere deflesse di poco attraversando la lamina e tutte circa allo stesso modo, dato che la lamina doveva essere uniformemente riempita da atomi.

Rilevò invece che la maggior parte delle particelle attraversava la lamina senza deflessione, mentre alcune venivano deflesse con angoli anche grandi o addirittura rimbalzavano indietro.

> *Fu incredibile, quasi come se avessi sparato una granata contro un foglio di carta e questa fosse tornata indietro, colpendomi*
>
> Rutherford

### Modello di Rutherford
Per rispettare i risultati del suo esperimento, Rutherford ideò il **modello a Sistema solare**: l'atomo è formato da un nucleo positivo centrale con gli elettroni che vi orbitano attorno ed è principalmente vuoto.

La maggior parte della particelle alfa avrebbe quindi attraversato lo spazio vuoto, mentre poche avrebbero colpito il nucleo molto denso risultando in una deflessione importante.

Il problema del modello di Rutherford era la sua **instabilità**: l'elettrone orbitante subisce un'accelerazione centripeta e quindi dovrebbe emettere radiazione perdendo energia e collassando quindi sul nucleo in una frazione di secondo.

Inoltre la frequenza di emissione della radiazione di un elettrone orbitante deve essere uguale a quella della sua orbita e dato che può orbitare a qualsiasi frequenza ==dovrebbe emettere uno spettro continuo, invece emette uno spettro a righe.==

# Capitolo 21: La fisica quantistica
## L'ipotesi di Plank
Un **corpo nero** è un corpo ideale che assorbe tutta la radiazione che lo colpisce.
Inoltre è anche un radiatore ideale, ossia la distribuzione di energia della radiazione emessa da esso dipende solo dalla temperatura e non dal materiale di cui è costituito.

All'aumento della temperatura il picco di emissione aumenta di frequenza e l'intensità totale emessa aumenta.

Gli scienziati non riuscivano a costruire un modello che spiegasse le **curve di distribuzione** dell'energia sulle varie frequenze in base alla temperatura.
Plank per risolvere la questione ipotizzò che l'energia fosse **quantizzata**, ossia che dovesse essere necessariamente un multiplo di $hf$, dove $h$ è la costante di plank e $f$ la frequenza della radiazione.

## Effetto fotoelettrico
Ad avvalorare la tesi di plank fu anche l'**effetto fotoelettrico**, spiegato da Einstein.

Einstein sulla scia di Plank suppose che anche la luce fosse formata da quanti di energia: i **fotoni**, la cui energia fosse determinata dalla frequenza:
$$
E_{\text{fotone}}=hf
$$
la luce può essere quindi pensata come un fascio di fotoni.

Aumentando l'intensità e mantenendo la stessa frequenza aumenta il numero di fotoni.
Aumentando la frequenza e mantendendo la stessa intensità aumenta l'energia trasportata da ogni fotone, ma si riduce il numero degli stessi.

L'effetto fotoelettrico è l'emissione di elettroni da un piastra colpita da radiazione elettromagnetica.
L'emissione avviene solo se la luce supera una **frequenza di soglia**, indipendentemente dall'intensità.
L'intensità della luce influenza il numero di elettroni emessi, mentre la frequenza influenza l'energia cinetica degli stessi.

Il fenomo si spiega con il modello a fotoni: gli elettroni interagiscono con un elettrone alla volta, se il fotone ha energia almeno pari al **lavoro di estrazione** un elettrone viene liberato e l'energia in eccesso diventa energia cinetica del fotone.
Se invece il fotone non ha energia sufficiente l'elettrone non si libera.

Sperimentalmente si misurò il fenomeno con un circuito con 2 piastre non collegate mantenute ad una differenza di potenziale da un generatore. ==La piastra emettritore (negativa) colpita dalla luce libera elettroni, che si muovono verso la piastra collettore formando una corrente== rilevata da un amperometro.

## Modello di Bohr
Bohr formula un modello dell'atomo di idrogeno che spiega la sua stabilità e lo spettro a righe.

Bohr sostiene che gli elettroni si muovano in orbite circolari attorno al nucleo, ma che solo alcune orbite siano permesse.
==Gli elettroni emettono radiazione elettromagnetica solo quando saltano da un'orbita== all'altra e non quando rimangono sulla stessa.

L'energia del fotone emesso durante un salto è uguale alla differenza di energia tra le 2 orbite, ==dato che le orbite sono ben definite anche i salti energetici lo sono e di conseguenza anche la frequenza dei fotoni emessi==, motivo per cui gli spettri sono a righe.

Il raggio dell'n-esima orbita dell'atomo di bohr è
$$
r_n=\bigg(\frac{h^2}{4\pi^2mke^2} \bigg)n^2
$$
