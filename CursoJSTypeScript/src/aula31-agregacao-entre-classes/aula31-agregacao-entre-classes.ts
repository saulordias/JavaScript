    // Agregação entre classes -- usada quando uma classe "tem" outra classe
    
    // Carrinho de Compras "tem" produtos
    export class CarrinhodeCompras {
        private readonly produtos: Produto[] = [];

        inserirProdutos(...produtos: Produto[]): void {
            for (const produto of produtos) {
                this.produtos.push(produto);
            }
        }

        quantidadeProdutos(): number {
            return this.produtos.length;
        }

        valoTotal(): number {
            return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
        }


    }

    // Produto "faz parte" do Carrinho de Compras
    export class Produto {
        constructor(public nome: string, public preco: number) { }
    }

    const produto1 = new Produto('Camiseta', 49.90);
    const produto2 = new Produto('Caneca', 30.00)
    const produto3 = new Produto('Caneta', 1.90)

    const carrinhodeCompras = new CarrinhodeCompras();
    carrinhodeCompras.inserirProdutos(produto1);
    carrinhodeCompras.inserirProdutos(produto2);
    carrinhodeCompras.inserirProdutos(produto3);
    console.log(carrinhodeCompras.valoTotal());
    console.log(carrinhodeCompras.quantidadeProdutos());
