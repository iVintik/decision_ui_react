


Основано на https://reactflow.dev/

## Key files
node-types.json - описание доступных узлов.\
Canvas.js - компонент с холстом, включает в себя описание стартового состояния диаграммы.

## Demo
https://optimistic-lamport-8d4b04.netlify.app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Возможности
* Позволяет редактировать диаграмму, добавляя узлы из палитры и настраивая связи между ними
* Позволяет редактировать узлы, меняя параметры узла во всплывающем окне
* Гибкий список доступных узлов и список настраиваемых парметров узлов, определяется json объектом (в примере берется из файла https://github.com/iVintik/decision_ui_react/blob/master/src/nodeTypes.json)
* Возможность добавлять кастомные узлы с базовым отображением на уровне конфига
* Валидация параметров узлов в соответствии с конфигом
* Возможность создавать кастомные React компоненты для отображения узлов (пример https://github.com/iVintik/decision_ui_react/blob/master/src/CustomNode/CustomNode.js)
* Все узлы - Recat компонеты, встроены в DOM и поддерживают css
* Первоначальноее состояние диграммы (в т.ч. параметры узлов) задаются json объектом https://github.com/iVintik/decision_ui_react/blob/master/src/Canvas/Canvas.js
* Состояние диаграммы может быть получено с помощью API reactflow https://reactflow.dev/docs/api/component-props/ заданные параметры узлов вложены в состояние диаграммы в reactflow
