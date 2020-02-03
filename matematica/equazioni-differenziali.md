# Equazioni differenziali

### Equazioni di primo ordine

Solo con $x,y,y'$

#### Senza y

$$
y'=f(x)
$$

E.g.

$$
\begin{aligned}
y'&=2x^3-\ln{x}\\
y&=\int (2x^3-\ln{x}) dx
\end{aligned}
$$

#### Equazioni a variabili separabili

$$
y'=f(x)\cdot g(x)
$$

E.g.

$$
\begin{aligned}
2y'&=xy+2y\\
2\frac{dy}{dx}&=(x+2)y\\
\int\frac{2}{y}dy&=\int(x+2)dx\\
2\ln{| y |}&=\frac{x^2}{2}+2x+c\\
|y|&=e^{\frac{x^2}{4}+x+c}
\end{aligned}
$$

#### Equazioni lineari

$$
y'=a(x)y+b(x)
$$

Procedimento:

$$
\begin{aligned}
A(x)&=\int a(x) dx\\
y&=e^{A(x)}\cdot \bigg[\int b(x)e^{-A(x)} dx + c\bigg]
\end{aligned}
$$

Dimostrazione

$$
\begin{aligned}
y'-a(x)y&=b(x)\\
y'e^{-A(x)}-a(x)e^{-A(x)}y&=b(x)e^{-A(x)}\\
D\Big[ye^{-A(x)}\Big]&=b(x)e^{-A(x)}\\
ye^{-A(x)}&=\int b(x)e^{-A(x)} dx \\
y&=e^{A(x)}\cdot \bigg[\int b(x)e^{-A(x)} dx + c\bigg]
\end{aligned}
$$

E.g.

$$
\begin{aligned}
x&\gt0\\
y'+\frac{y}{x}&=x\\
y'&=-\frac{1}{x}y+x\\
A(x)&=-\ln{x}\\
y&=e^{-\ln{x}}\bigg[\int x e^{\ln{x}}dx+c \bigg]\\
&=\frac{1}{x}\bigg[\int x^2 dx + c \bigg]\\
&=\frac{1}{x}\bigg[\frac{x^3}{3}+c \bigg]
\end{aligned}
$$

### Secondo ordine

$$
ay'' + by' + cy = f(x)
$$

Il primo passaggio sarà risolvere l'equazione caratteristica:

$$
ay'' + by' + cy = 0
$$

Partiamo risolvendo l'equazione associata:

$$
at^2 +bt +c=0
$$

I vari casi dipendono da $a,b,c$:

* $\Delta \gt 0$: 2 soluzioni distinte $r\_1,r\_2$ e la soluzione dell'equazione caratteristica è:

  $$
  y=c_1 e^{r_1 x} + c_2 e^{r_2 x}
  $$

* $\Delta = 0$: 2 soluzioni coincidenti $r$, la soluzione dell'equazione caratteristica è:

  $$
  y=e^{rx}(c_1+c_2 x)
  $$

* $\Delta \lt 0$: 2 soluzioni complesse $\alpha \pm i\beta$

  $$
  y=e^{\alpha x}(c_1 \cos{\beta x} + c_2 \sin{\beta x})
  $$

#### Caso particolare polinomiale

Se $f\(x\)$ è un polinomio di grado $n$ allora la soluzione particolare $y=g\(x\)$ sarà:

* $g\(x\)=P\_n\(x\)$ se 0 non è soluzione dell'equazione caratteristica associata.
* $g\(x\)=x\cdot P\_n\(x\)$ se 0 è soluzione dell'equazione caratteristica associata con molteplicità 1
* $g\(x\)=x^2\cdot P\_n\(x\)$ se 0 è soluzione con molteplicità 2

La soluzione dell'equazione differenziale è la somma di soluzione caratteristica e soluzione particolare.

#### Caso particolare

