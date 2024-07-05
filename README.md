  <picture>
    <img alt="BabáFacilParaPais" src="./docs/banner.png" />
  </picture>


![GitHub repo size](https://img.shields.io/github/repo-size/BabaFacil/App?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/BabaFacil/App?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/BabaFacil/App?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/BabaFacil/App?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/BabaFacil/App?style=for-the-badge)

> BabáFacíl é uma plataforma dedicada a resolver o desafio comum enfrentado por pais e babás: a dificuldade em encontrar o match perfeito entre cuidadores e oportunidades na mesma área. Combinando um aplicativo e um site intuitivos, a missão é facilitar o processo de conexão entre pais que precisam de cuidadores confiáveis e babás em busca de oportunidades.

## ❗ Problemas a serem Solucionados

"Não tenho tempo para cuidar da minha criança e não conheço ninguém disponível para cuidar dela para mim enquanto estiver fora."
BabáFacíl oferece uma solução conveniente ao permitir que pais encontrem babás confiáveis em sua área, eliminando a preocupação de encontrar um cuidador adequado para seus filhos.


## ⚙ Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do `Node.js` e `Expo`
- Instalou no seu celular Android ou IOS o programa `Expo Go, ou só Expo`.


## 🤳🏼 Rodando

Para rodar, siga estas etapas:

Terminal:

```
expo start ou npx expo start
```
- Após isso escanear QRcode ou clicar na opção desejavel
```
a -> Android, caso estiver com celular plugado no computador
```

Celular:

Abrir o programa e escanear QRcode, ou plugar celular no computador

## 🚀 Deploy

Para realizar o deploy, siga esses passos

Gerar o .aab (subir para a Play Store):

```
eas build -p android
```

Caso você queira gerar o .apk:

```
eas build -p android --profile preview
```