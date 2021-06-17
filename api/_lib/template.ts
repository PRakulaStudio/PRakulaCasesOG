// import { readFileSync } from 'fs';
// import marked from 'marked';
// import { sanitizeHtml } from './sanitizer';
// import {ParsedRequest} from './types';
// const twemoji = require('twemoji');
// const twOptions = { folder: 'svg', ext: '.svg' };
// const emojify = (text: string) => twemoji.parse(text, twOptions);

// const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString('base64');
// const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString('base64');
// const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString('base64');

/*function getCss(theme: string, fontSize: string) {
    let background = 'white';
    let foreground = 'black';
    let radial = 'lightgray';

    if (theme === 'dark') {
        background = 'black';
        foreground = 'white';
        radial = 'dimgray';
    }
    return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Vera';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
      }

    body {
        background: ${background};
        background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }

    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.8;
    }`;
}*/

/*export function getHtml(parsedReq: ParsedRequest) {
    const { text, theme, md, fontSize, images, widths, heights } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
        <div>
            <div class="spacer">
            <div class="logo-wrapper">
                ${images.map((img, i) =>
                    getPlusSign(i) + getImage(img, widths[i], heights[i])
                ).join('')}
            </div>
            <div class="spacer">
            <div class="heading">${emojify(
                md ? marked(text) : sanitizeHtml(text)
            )}
            </div>
        </div>
    </body>
</html>`;
}*/
export function getHtml(caseData: any) {
    return `<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Кейс № ${caseData.id} — PRakula</title>
    <meta name="color-scheme" content="light dark">
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport">
    <base href="https://prakula.ru">
    <style>
        :root {
        /*background-image: url('data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="64" width="64"><text y="28" font-size="8">🦈</text></svg>');*/
        /*background-size: 100px 100px;*/
            font-family: Helvetica, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
        }

        body {
            max-width: 1400px;
            margin: unset;
            height: fit-content;
        }

        a {
            color: inherit;
            text-transform: capitalize;
        }

        picture, img {
            max-height: 100px;
        }

        .label {
            opacity: .5
        }
    </style>
</head>
<body>
<picture style="width: 50px;">
    <source media="(prefers-color-scheme: dark)" srcset="/assets/img/logo.png">
    <img src="/assets/img/logo.light.png">
</picture>
<h1>Кейс № ${caseData.id} <span class="label">(Аккаунт: ${caseData.user_id})</span></h1>
<h2><span class="label">По запросу:</span> ${caseData.keyword}</h2>
<h3>
    Позиция в <span style="color: red">Я</span>ндекс: ${caseData.position} <span class="label" title="ID Региона: ${caseData.region_id}">(${caseData.region})</span>
</h3>
<h4>
    <span class="label">Домен:</span> <a href="http://${caseData.domain}" target="_blank">${caseData.domain}</a>
</h4>
<h5><span class="label">Дата:</span> ${caseData.date}</h5>
</body>
</html>`;
}

/*function getImage(src: string, width ='auto', height = '225') {
    return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`
}*/

/*function getPlusSign(i: number) {
    return i === 0 ? '' : '<div class="plus">+</div>';
}*/
