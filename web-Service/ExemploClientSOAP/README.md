<h2>ClientSoap para consumo de webservice para calculos matemáticos</h2>

<p>Criar e acessar uma pasta</p>
<b>mkdir ExemploClientSOAP && cd ExemploClientSOAP</b>

<p>inicializar o projeto e criar o arquivo <b>package.json</b></p>
<b>npm init</b>

<p>Instalar a biblioteca SOAP</p>
<b>npm install soap</b>

<p>Ao executar a instalação do soap, será inserida a dependência do soap no arquivo <b>package.json</b> e irá criar a pasta <b>node_modules</b> - raiz de todas as bibliotecas do projeto</p>

<h3>Informações do webservice:</h3> 

<b>Url:</b> http://www.dneonline.com/calculator.asmx?wsdl

<h4>Informações mais importantes para saber do webservice:</h4>
- wsdl:service name = Calculator
- wsdl:port name= CalculatorSoap

<b>wsdl</b> - linguagem de descrição do webservice. 

<b>Certifique-se</b> de que o Node.js instalado em sua máquina estejá na versão acima da 18 para evitar o erro
<b>new xml_crypto_1.SignedXml(options?.signerOptions?.idMode</b>

o erro está relacionado ao uso da sintaxe opcional de encadeamento (?.), que não é suportada por versões mais antigas do Node.js.

<h3>Executando o client</h3>
<b>node index.js</b>
