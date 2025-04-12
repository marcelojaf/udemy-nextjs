# Instruções do GitHub Copilot

Ao gerar código para este projeto, por favor, siga estas diretrizes:

## Diretrizes Gerais de Codificação

- Siga os princípios de código limpo:
  - Use nomes de variáveis significativos e pronunciáveis
  - Funções devem fazer apenas uma coisa
  - Mantenha funções pequenas e focadas
  - Evite aninhamento profundo de estruturas de controle
  - Minimize comentários escrevendo código autoexplicativo
  - Evite duplicação (princípio DRY)
  - Prefira imutabilidade quando possível
  - Trate erros com elegância

## Diretrizes de CSS

- Siga a metodologia BEM (Block Element Modifier) para nomenclatura de classes CSS:

  ```css
  /* Componente Bloco */
  .card {
  }

  /* Elemento que depende do bloco */
  .card__title {
  }
  .card__image {
  }

  /* Modificador que altera o estilo do bloco */
  .card--featured {
  }
  .card__title--large {
  }
  ```

- Mantenha seletores específicos, mas evite aninhamento excessivo
- Agrupe propriedades relacionadas
- Use variáveis para valores reutilizáveis

## Documentação

- Use comentários de documentação no estilo XML, semelhante ao C#, para funções e classes:

  Para JavaScript/TypeScript:

  ```javascript
  /**
   * <summary>
   * Busca dados do endpoint da API especificado
   * </summary>
   * <param name="url">A URL para buscar dados</param>
   * <param name="options">Configuração opcional da requisição</param>
   * <returns>Promise contendo os dados da resposta</returns>
   * <exception cref="Error">Lançada quando a requisição de rede falha</exception>
   */
  async function fetchData(url, options = {}) {
    // Implementação
  }
  ```

  Para componentes React:

  ```jsx
  /**
   * <summary>
   * Um componente de botão reutilizável com diferentes variantes
   * </summary>
   * <param name="props">
   *   <param name="variant">O estilo visual: 'primary', 'secondary' ou 'text'</param>
   *   <param name="size">O tamanho do botão: 'small', 'medium' ou 'large'</param>
   *   <param name="disabled">Se o botão está desativado</param>
   *   <param name="onClick">Função a ser chamada quando o botão é clicado</param>
   *   <param name="children">Conteúdo do botão</param>
   * </param>
   * <returns>Um componente de botão estilizado</returns>
   */
  function Button({
    variant = "primary",
    size = "medium",
    disabled = false,
    onClick,
    children,
  }) {
    // Implementação
  }
  ```

## Diretrizes Específicas do Next.js

- Siga os padrões de arquitetura do App Router
- Mantenha componentes de servidor e cliente devidamente separados
- Use métodos apropriados de busca de dados conforme necessário
- Otimize imagens usando o componente Image do Next.js
- Aproveite as otimizações integradas do Next.js

## Uso do TypeScript

- Sempre defina interfaces e tipos adequados
- Evite usar o tipo `any`
- Use tipos de retorno adequados para funções
- Aproveite tipos de união e genéricos quando apropriado

## Testes

- Escreva testes para funcionalidades críticas
- Siga o padrão Arrange-Act-Assert
- Mantenha testes independentes e focados
