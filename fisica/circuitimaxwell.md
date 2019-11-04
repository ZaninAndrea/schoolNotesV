---
category: Fisica
title: Elettromagnetismo
index: 1
draft: false
---

# circuitiMaxwell

Revisione molto schematica di tutto l'elettromagnetismo

## Capitolo 12: Cariche elettriche, forze e campi

### Carica e forza

**Polarizzazione**: Un corpo carico induce una separazione di carica in un corpo neutro vicino anche senza contatto.

**Isolante**: le cariche non sono libere di muoversi **Conduttore**: le cariche sono libere di muoversi

I metodi di carica sono:

* contatto
* strofinio
* induzione

Nei conduttori le cariche in eccesso si muovono sempre verso la superficie esterna, sulla quale si distriuiscono uniformemente. Quando le cariche sono ferme, all'interno di un conduttore il campo è sempre nullo --&gt; effetto schermatura \(gabbia di Faraday\).

**Legge di Coulomb**: intensità di forza elettrostatica tra 2 cariche

$$
F=k\frac{q_1 q_2}{r^2}
$$

Con $k=\frac{1}{4\pi\epsilon\_0}$

Quando utilizziamo la legge di Coulomb possiamo considerare una sfera carica come una carica puntiforme.

### Campo elettrico

Se una carica di prova $q\_0$ subisce una forza $\vec{F}$ in un dato punto, allora il **campo elettrico** in quel punto è

$$
\vec{E}=\frac{\vec{F}}{q_0}
$$

==Le linee di campo elettrico escono dalle cariche positive ed entrano in quelle negative.== Inoltre sono più dense dove il campo ha intensità maggiore.

Il campo elettrico è una misura vettoriale e quindi si somma vettorialmente.

L'intensità di campo elettrico generato da una carica puntiforme è

$$
E=k\frac{q}{r^2}
$$

L'intensità del campo generato da un filo carico è

$$
E = \frac{\lambda}{2\pi \epsilon_0} \frac{1}{r}
$$

L'intensità del campo generato da una piastra carica è

$$
E = \frac{\sigma}{2\epsilon_0}
$$

È importante ricordardare le dipendenze da $r$ delle formule precedenti.

Un condensatore a faccie piane parallele crea un campo elettrico solo all'interno delle 2 faccie ed esso è

$$
E = \frac{\sigma}{\epsilon_0}
$$

Le linee di campo elettrico sono sempre perpendicolari alla superficie di un conduttore.

### Flusso di campo elettrico

Il **flusso di campo elettrico** è definito come

$$
\Phi = EA\cos{\theta}
$$

$\theta$ è l'angolo compreso tra la normale al piano e il campo elettrico

La legge di Gauss dice che

$$
\Phi = \frac{q}{\epsilon_0}
$$

Grazie a questa si può ricavare il campo elettrico:

* di un filo immaginando come superficie un cilindro parallelo ad esso
* di una piastra immaginando come superficie un cilindro perpendicolare ad essa

## Capitolo 13: Potenziale elettrico ed energia potenziale

### Potenziale

Analogamente al campo elettrico il **potenziale elettrico** è definito come

$$
\Delta V=\frac{\Delta U}{q_0}
$$

Notiamo che la definizione fornisce solo la _variazione_ di potenziale e non un valore definito, in quanto come per l'energia possiamo definire lo 0 a piacere.

Campo elettrico e potenziale sono legati da questa relazione

$$
\Delta V = -E \Delta s
$$

Le cariche positive tendono a muoversi verso zone di potenziale basso, mentre quelle negative verso zone di potenziale alto.

Il potenziale elettrico ad una data distanza da una carica puntiforme è

$$
V=\frac{kq}{r}
$$

Per comodità si è scelto come potenziale 0 quello in un punto infinitamente distante dalla carica.

### Condensatori e dielettrici

La **capacità** di un condensatore è definita come

$$
C=\frac{Q}{V}
$$

E possiamo calcolarla semplicemente sapendo la area delle piastre \($A$\) e la distanza tra di esse \($d$\)

$$
C=\frac{\epsilon_0 A}{d}
$$

Per aumentare la capacità possiamo inserire un materiale isolante, il **dielettrico**, tra le 2 piastre.

A tensioni molto elevate avviene la **rottura del dielettrico** ossia le cariche iniziano a fluire attraverso il materiale isolante.

L'energia immagazzinata in un condensatore dipende da capacità e voltaggio:

$$
\begin{aligned}
U&=\frac{1}{2}CV^2\\
&=\frac{1}{2}QV\\
&=\frac{Q^2}{2C}
\end{aligned}
$$

## Capitolo 14: Corrente elettrica e circuiti

L'**intensità di corrente** è definita come

$$
I=\frac{dQ}{dt}
$$

e si misura in Ampere \(A\)

Un circuito si dice a **corrente continua** se la corrente fluisce sempre nella stessa direzione e a **corrente alternata** se la inverte periodicamente

Una batteria genera una differenza di potenziale, **forza elettromotrice**, ai suoi estremi.

Il verso della corrente è opposto a quello del flusso degli elettroni.

### Leggi di Ohm

La prima legge di Ohm definisce la **resistenza** come la costante di proporzionalità tra voltaggio e intensità:

$$
V=IR
$$

Questa si misura in Ohm \($\Omega$\)

I materiali che seguono la legge di Ohm sono detti ohmici

La resistenza di un filo dipende dalle sue caratteristiche fisiche:

$$
R=\rho \frac{L}{A}
$$

$\rho$ è la **resistività** e ==dipende dalla temperatura== oltre che dal materiale:

* nei metalli aumenta all'aumentare della temperatura
* nei semiconduttori diminuisce all'aumentare della temperatura
* nei **superconduttori** è nulla sotto ad una certa temperatura critica

### Potenza

La potenza di un circuito si calcola con

$$
P=IV
$$

mentre la potenza dissipata da una resistenza per **effetto Joule** è

$$
P=RI^2
$$

### Resistenze e condensatori in serie e parallelo

Resistenze in serie:

$$
R_{\text{eq}}=R_1+R_2
$$

Resistenze in parallelo

$$
\frac{1}{R_{\text{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}
$$

Condensatori in serie:

$$
\frac{1}{C_{\text{eq}}}=\frac{1}{C_1}+\frac{1}{C_2}
$$

Condensatori in parallelo

$$
C_{\text{eq}}=C_1+C_2
$$

### Leggi di Kirchhoff

Legge dei nodi di Kirchhoff:

> La somma di tutte e correnti che convergono in un nodo di un circuito deve essere uguale a zero

Legge delle maglie:

> La somma algebrica di tutte le differenze di potenziale lungo una maglia \(percorso chiuso\) di un circuito è nulla

### Circuiti RC

I circuiti RC sono circuiti composti da una resistenza e un condensatore collegati in serie ad una batteria.

#### Carica del condensatore

$$
q(t)=C\epsilon(1-e^{-\frac{t}{RC}})
$$

$$
i(t)=\frac{\epsilon}{R}e^{-\frac{t}{RC}}
$$

$RC=\tau$ costante di tempo, l'unità di misura è il secondo.

$$
\frac{V}{A} \cdot \frac{C}{V}=\frac{1}{\frac{C}{s}} \cdot C=s
$$

Dopo un tempo $\tau$ la carica sul condensatore è già $\approx 63\%$ della carica massima

#### Scarica del condensatore

$$
q(t)=C\epsilon e^{-\frac{t}{RC}}
$$

$$
i(t)=\frac{\epsilon}{R}e^{-\frac{t}{RC}}
$$

Notare che l'intensità decresce alla stessa maniera sia in un circuito di carica che di scarica

## Capitolo 15: Il magnetismo

==I 2 poli magnetici sono indivisibili==.

Le linee di campo magnetico escono dal polo nord e entrano nel polo sud.

Il polo nord geografico è il polo sud magnetico.

### Cariche

La forza subita da una particella carica in movimento attraverso un campo magnetico \(**forza di Lorentz**\) è:

$$
\begin{aligned}
\vec{F}&=q \vec{v} \times \vec{B} \\
F&=q v B \sin{\theta}
\end{aligned}
$$

La direzione della forza si trova con la regola della mano destra \(pollice=direzione carica, dita=campo magnetico, palmo=direzione forza\) ed è sempre perpendicolare sia alla direzione del movimento sia al campo magnetico.

==La forza di Lorentz è conservativa==, perché sempre perpendicolare al moto.

Una particella immersa in un campo magnetico tende a muoversi di moto circolare o elicoidale. Il raggio di questa circonferenza è

$$
r=\frac{mv}{\mid q \mid B}
$$

### Fili e spire

La forza magnetica esercitata su un **filo percorso da corrente** è:

$$
F=ILB\sin{\theta}
$$

$L$ è la lunghezza del filo

La direzione si trova con la regola della mano destra \(pollice=direzione corrente, dita=campo magnetico, palmo=direzione forza\)

Il momento torcente esercitato su una **spira percorsa da corrente** dalla forza magnetica è

$$
M=NIAB\sin{\theta}
$$

$\theta$ è l'angolo compreso tra campo magnetico e normale alla spira. $N$ sono gli avvolgimenti della spira $A$ è l'area della spira

### Campo magnetico indotto

==Un filo percorso da corrente induce un campo magnetico== concentrico ad esso, la cui direzione si può trovare con la regola della mano destra \(pollice=direzione corrente, le dita ruotano attorno al filo nella direzione del campo magnetico\)

La **legge di Ampere** collega la corrente concatenata attraverso un percorso chiuso al campo magnetico generato:

$$
\oint B\: dl = \mu_0 I_{\text{concatenata}}
$$

Da questa legge ricaviamo l'intensità del campo generato da un filo:

$$
B=\frac{\mu_0 I}{2\pi r}
$$

Due fili percorsi da corrente si attraggono se la corrente scorre nello stesso verso e si respingono in caso contrario. La forza ha intensità:

$$
F=\frac{\mu_0 I_1 I_2}{2\pi d}L
$$

Questa formula si può ricavare facilmente con le conoscenze precedenti.

Una spira induce un campo magnetico di intensità

$$
B=\frac{\mu_0 NI}{2R}
$$

e un solenoide

$$
B=\mu_0\bigg(\frac{N}{L}\bigg)I
$$

### Selettore di velocità

Campo elettrico e magnetico si bilanciano solo ad una determinata velocità:

$$
\begin{aligned}
qE&=qvB\\
v&=\frac{E}{B}
\end{aligned}
$$

Quando la velocità è diversa da quella selezionata la particella viene deviata, passano quindi solo le particella con la velocità desiderata.

## Capitolo 16: L'induzione elettromagnetica

### Corrente indotta

==La variazione di flusso di campo magnetico induce una corrente== che scorre sempre nel verso che si oppone alla variazione.

**Legge di Faraday**:

$$
\epsilon = \frac{d\Phi}{dt}
$$

Le correnti indotte all'interno di un oggetto, invece che in un circuito sono dette **correnti parassite** e hanno molte applicazioni: dai fornelli ad induzione ai freni magnetici.

In una spira fatta ruotare meccanicamente all'interno di un campo magnetico si induce una corrente alternata:

$$
\epsilon = NBA\omega \sin{\omega t}
$$

Questa formula si ottiene dalla legge di Faraday

### Bobine

Una bobina percorsa da corrente variabile tende a resistere a questa variazione generando una corrente opposta:

$$
\epsilon = \frac{d\Phi}{dt}
$$

L'**induttanza** \($L$\) è la costante di proporzionalità tra variazione del flusso e variazione della corrente

$$
L \Delta I=\Delta \Phi
$$

L'induttanza di un solenoide dipende solamente dalle sue caratteristiche fisiche

$$
L=\mu_0 \bigg (\frac{N^2}{l} \bigg) A
$$

In un circuito RL a corrente continua l'intensità di corrente è:

$$
I=\frac{\epsilon}{R}(1-e^{-\frac{t}{\tau}})
$$

Con $\tau=\frac{R}{L}$

L'energia immagazzinata in un'induttanza è

$$
U=\frac{1}{2}LI^2
$$

### Trasformatori

==Un trasformatore modifica la tensione di un circuito.==

È composto da un avvolgimento primario, un avvolgimento secondario e un anello metallico. L'anello metallico trasporta il campo magnetico creato dall'avvolgimento primario a quello secondario e induce quindi una corrente in quest'ultimo.

$$
\frac{V_p}{V_s}=\frac{N_p}{N_s}
$$

In un trasformatore ideale la potenza è conservata.

Tensioni più altre riducono l'effetto Joule, perchè a parità di potenza tensioni più alte significano intensità più basse.

## Capitolo 17: Circuiti in corrente alternata

In un circuito a corrente alternata sia tensione che intensità oscillano:

$$
V=V_{\text{max}}\sin{\omega t}
$$

L'intensità in un circuito CA con solo resistenze è:

$$
I=I_{\text{max}}\sin{\omega t}
$$

### Fasori

Per lavorare con i circuiti a corrente alternata si usano i **fasori**, ossia vettori rotanti in senso antiorario con velocità angolare pari ad $\omega$ e il cui modulo è pari a $V_{\text{max}}$ o $I_{\text{max}}$

Tensione e corrente sono in fase se i fasori sono allineati.

La **corrente efficace** è

$$
I_{\text{eff}}=\frac{1}{\sqrt{2}}I_{\text{max}}
$$

E si può usare per calcolare la potenza media:

$$
P_{m}=I_{\text{eff}}R
$$

### Circuiti RC, RL, RLC e LC

#### Circuito RC

si definisce la **reattanza capacitiva** per analogia con la resistenza

$$
X_C = \frac{1}{\omega C}
$$

In modo che

$$
I_{\text{eff}}=\frac{V_{\text{eff}}}{X_C}
$$

In un circuito capacitivo la corrente è in anticipo di $\frac{\pi}{2}$ e la potenza media è nulla.

Aggiungendo una resistenza i 2 fasori si sommano e otteniamo quindi un'**impedenza** del circuito

$$
Z=\sqrt{R^2+X_C^2}
$$

Anche l'impedenza è utilizzata analogamente alla resistenza:

$$
I_{\text{eff}}=\frac{V_{\text{eff}}}{Z}
$$

Dato $\theta$ l'angolo compreso tra fasore della resistenza e fasore dell'impedenza, il **fattore di potenza** è

$$
\cos{\theta}=\frac{R}{Z}
$$

La potenza media di questo circuito è

$$
P_m =I_{\text{eff}}V_{\text{eff}}\cos{\theta}
$$

#### Circuito RL

La reattanza induttiva è

$$
X_L=\omega L
$$

L'impedenza

$$
Z=\sqrt{R^2+X_L^2}
$$

Il fattore di potenza rimane

$$
\cos{\theta}=\frac{R}{Z}
$$

#### Circuito RLC

In un circuito con resistenza, induttanza e condensatore i fasori di induttanza e condensatore tendono a compensarsi.

$$
Z=\sqrt{R^2+(\omega L - \frac{1}{\omega C})^2}
$$

Ad alte frequenze l'induttanza non conduce, mentre il condensatore è un filo ideale. A basse frequenze l'induttanza è un filo ideale, mentre il condensatore non conduce

#### Risonanza

Un circuito LC manifesta una corrente oscillante anche senza un generatore, la frequenza naturale di tale corrente è

$$
\omega = \frac{1}{\sqrt{LC}}
$$

Ossia la frequenza per la quale i fasori di induttanza e condensatore si compensano.

Facendo oscillare il sistema con frequenze vicine a quella naturale si può ottenere una grande intensità, in maniera analoga a come spingendo un'altalena con la frequenza corretta possiamo aumentarne l'ampiezza del moto. Questo fenomeno è detto **risonanza** e una suo applicazione è nella radio, che ci permette di sintonizzarci \(mettersi in risonanza\) con una frequenza a piacere.

## Capitolo 18: La teoria di Maxwell e le onde elettromagnetiche

### Equazioni di Maxwell

==Maxwell riesce ad unificare e riassumere tutta la teoria sull'elettromagnetismo.==

#### Prima equazione di Maxwell

È il **teorema di Gauss** sul campo elettrico

$$
\begin{aligned}
\phi(E)&=\frac{q_{\text{interna}}}{\epsilon_0}\\
\int \vec{E} \cdot d\vec{S}&=\frac{q_{\text{interna}}}{\epsilon_0}\\
\end{aligned}
$$

#### Seconda equazione di Maxwell

Analogo nel campo magnetico attraverso una **superficie chiusa** del teorema di Gauss sul campo elettrico.

$$
\phi(B)=\int_S \vec{B} \cdot d\vec{S}=0
$$

Spiegazione intuitiva: Le linee di campo magnetico che bucano una superficie chiusa devo uscire e anche rientrare, perché i poli Nord e Sud non possono essere divisi, quindi in totale si cancellano.

#### Terza equazione di Maxwell

Indica la relazione tra variazione di campo magnetico e corrente indotta

$$
\oint_\gamma \vec{E} \cdot d\vec{l}=-\frac{d\Phi_B}{dt}
$$

#### Quarta equazione di Maxwell

È la legge di Ampère sul campo magnetico indotto da una corrente, con l'aggiunta della corrente di spostamento

$$
\oint_\gamma\vec{B}d\vec{l}=\mu_0(i_{\text{concatenata}}+i_{\text{spostamento}})
$$

La **corrente di spostamento** è

$$
i_s=\epsilon_0\frac{d\phi_E}{dt}
$$

e viene introdotta perchè la legge di Ampère non funziona in processi dinamici, e.g. un condensatore che si carica.

![](https://github.com/ZaninAndrea/schoolNotesV/tree/ed384ada38b83d27c765a8119c5b1f507f1593f9/images/correnteSpostamento.jpeg)

### Luce

Le equazioni di Maxwell prevedono la presenza anche nel vuoto di campi elettrici e magnetici correlati tra loro \(la variazione di uno produce una variaione dell'altro\), che oscillano sinusoidalmente nel tempo muovendosi nello spazio. Queste configurazioni sono dette **onde elettromagnetiche**.

==Cariche elettriche accelerate irraggiano onde elettromagnetiche==, ad esempio un'antenna percorsa da corrente.

Le onde elettromagnetiche si propagano anche nel vuoto con una velocità costante:

$$
c=\frac{1}{\sqrt{\epsilon_0 \mu_0}}\approx 3\cdot 10^{8}\text{ m/s}
$$

In un'onda elettromagnetica campo elettrico e campo magnetico hanno la seguente relazione

$$
E=cBn
$$

L'**intensità** di un'onda elettromagnetica esprime la quantità di energia che trasporta per unità di superficia per unità di tempo:

$$
I=c\epsilon_0 E^2 = \frac{c}{\mu_0}B^2
$$

#### Esperimenti per determinare la velocità della luce

Galileo tentò per primo di misurare la velocità della luce, ma riuscì a determinare solamente che essa è molto grande.

Romer misurando le eclissi delle lune di Giove notò che quando Giove era alla massima distanza dalla Terra queste avvenivano con 16 minuti di ritardo rispetto a quando la Terra era alla minima distanza. Questo scarto è il tempo impiegato dalla luce per percorrere lo spazio da un estermo all'altro dell'orbita terrestre

La prima misura in laboratorio della velocità della luce fu l'**esperimento della ruota dentata**: Fizeau fece passare un fascio luminoso attraverso un incavo di una ruota dentata, essa poi era riflessa da uno specchio e passava nell'incavo successivo. Misurando la velocità di rotazione della ruota e la distanza tra lo specchio e la ruota Fizeau ricavò la velocità della luce.

#### Spettro elettromagnetico

Le onde elettromagnetiche sono suddivise in base alla loro frequenza:

| nome | $f$ | $\lambda$ | caratteristiche |
| :--- | :--- | :--- | :--- |
| onde radio | $10^6-10^9$ | $300\text{m} - 0,3 \text{m}$ | Prodotta da corrente alternata in un'antenna |
| microonde | $10^9 - 10^{12}$ | $300\text{mm} - 0,3 \text{mm}$ | Onde elettromagnetiche a frequenza più alta producibili da circuiti elettronici |
| infrarossi | $10^{12}-4.3\cdot 10^{14}$ | $0,3 \text{mm} - 700 \text{nm}$ | Vengono assorbiti dalle molecole scaldandole |
| luce visibile | $4.3\cdot 10^{14}-7.5\cdot 10^{14}$ | $700 \text{nm} - 400 \text{nm}$ | Sono i colori che vediamo e sono prodotte da salti di guscio degli elettroni |
| ultravioletti | $7.5\cdot 10^{14}-10^{17}$ | $400 \text{nm} - 3 \text{nm}$ | L'esposizione prolungata provoca tumori, sono assorbite dall'ozono e provocano l'abbrozantura |
| Raggi X | $10^{17}-10^{20}$ | $3 \text{nm} - 3 \text{pm}$ | Molto utilizzate in medicina perchè attraversano i tessuti molli, ma non le ossa. Sono prodotte dalla rapida decelerazioni di elettroni contro un bersaglio metallico |

#### Polarizzazione

La polarizzazione di un'onda elettromagnetica coincide con la direzione del suo campo elettrico.

Un fascio si dice **polarizzato** se tutte le onde hanno la stessa polarizzazione.

Un **polarizzatore** è un materiale composto da lunghe molecole conduttrici parallele, che tende ad assorbire la luce con una certa polarizzazione, di conseguenza ==un fascio di luce che lo attraversa ne esce polarizzato==.

La legge di Malus ci indica l'intensità di un fascio polarizzato che attraversa un polarizzatore:

$$
I=I_0 \cos^2{\theta}
$$

$\theta$ è l'angola tra la direzione di polarizzazione del fascio in entrata e del polarizzatore.

Se invece la luce in entrata non era polarizzata:

$$
I=\frac{1}{2}I_0
$$

La luce può anche essere **polarizzata per diffusione**: la luce mette in oscillazione gli elettroni della molecola colpita nella direzione di polarizzazione. La molecola quindi si comporta come una piccola antenna emettendo radiazione nelle direzioni perpendicolari a quella di oscillazione. ==Se il fascio in entrata non è polarizzato otterremo quindi l'emissione di luce non polarizzata nella direzione di propagazione, ma polarizzata nelle direzioni perpendicolari ad essa.==

Inoltre la luce può essere **polarizzata per riflessione**: la luce riflessa da una superficie si polarizza in direzione parallela alla superficie, la polarizzazione è totale se l'angolo di rifrazione è l'**angolo di Brewster**:

$$
\tg{\theta_B}=\frac{n_2}{n_1}
$$

