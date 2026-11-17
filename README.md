# lekalo-typescript-hono

Пакет правил Hono для языкового runtime [lekalo-typescript](https://github.com/ichinya/lekalo-typescript).

## Статус

Репозиторий подготовлен для выделения существующей реализации. Код ещё не перенесён; пакет пока не готов к установке или использованию.

- Перенос реализации: [#1](https://github.com/ichinya/lekalo-typescript-hono/issues/1).
- Общий план: [lekalo#241](https://github.com/ichinya/lekalo/issues/241).

## Ответственность пакета

- Статическое извлечение маршрутов, handlers и middleware Hono.
- Hono-specific bindings, context/evidence и правила генерации HTTP-обвязки.
- Фикстуры, тесты совместимости и пины Hono, принадлежащие пакету.

## Источник переноса

`lekalo-typescript/adapters/node-typescript/src/hono-*.mjs`, Hono-ветки `scanner.mjs`, связанные tests/fixtures и `hono-compatibility.json`.

## Границы

TypeScript compiler, языковые symbols, процессный протокол и общая изоляция остаются у runtime/host. Правила получают ограниченный provider API; код приложения и package scripts не исполняются.

Версия пакета, версия provider/protocol API и версия языка или движка приложения фиксируются отдельно. Сборка и тесты должны быть автономными; источники и зависимости закрепляются точными версиями и digest. Выбор произвольного совместимого Git/local package и загрузка его зависимостей отслеживаются в [lekalo#239](https://github.com/ichinya/lekalo/issues/239).
