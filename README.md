### Teste para a NG Cash

### Para ver a aplicação, digite o comando a seguir na raiz do projeto:

- docker build -t ng-server .

- docker run -dp 4000:4000 ng-server

### Em seguida a pasta client:

- cd client

- docker build -t ng-client .

- docker run -dp 3000:3000 ng-client

<p>Pronto!! Agora teste a aplicação entrando em <a>http://localhost:3000</a> no seu navegador</p>
