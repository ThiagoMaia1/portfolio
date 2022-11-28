import React, { Component, CSSProperties, SyntheticEvent } from 'react'
import './Carrossel.scss'
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
} from 'react-icons/md'
import { getCoords, Coordinates } from '../../../constants/FuncoesGeraisTS'
import { capitalize } from '../../../constants/FuncoesGerais'
import { IconType } from 'react-icons'

type IndexSeta = 0 | 1

enum Direcao {
  top,
  bottom,
  left,
  right,
}

interface Props {
  direcao: 'vertical' | 'horizontal'
  tamanhoMaximo: string
  percentualBeirada?: number
  beiradaFinal?: number
  final?: symbol
  tamanhoIcone?: number
  corGradiente?: string
  corSeta?: string
  style?: CSSProperties
  fixedArrows?: boolean
}

type EstilosSeta = {
  estiloSetaUm: any
  estiloSetaDois: any
}

interface State extends EstilosSeta {
  estiloGaleria: any
  tamanhoCarrossel: number
  tamanhoGaleria: number
  mouseEnterSeta: IndexSeta
}

const estilosSeta: Array<'estiloSetaUm' | 'estiloSetaDois'> = [
  'estiloSetaUm',
  'estiloSetaDois',
]

class Carrossel extends Component<Props, State> {
  refGaleria: React.RefObject<HTMLDivElement>
  refCarrossel: React.RefObject<HTMLDivElement>
  corGradiente: string
  percentualBeirada: number
  direcao: Array<Direcao>
  dimensoes: { principal: string; secundaria: string }
  setaUm: IconType
  setaDois: IconType
  estiloSeta: any
  style: any
  timeoutSetas?: NodeJS.Timeout
  animacao?: NodeJS.Timeout
  timeoutDisplaySetas?: NodeJS.Timeout
  timeoutTransition?: NodeJS.Timeout
  timeoutLimpar?: NodeJS.Timeout
  timeoutSalto?: NodeJS.Timeout
  resizeObserver?: ResizeObserver
  timeoutDeslizar?: NodeJS.Timeout
  fixedArrows?: boolean
  estiloFixed = {
    opacity: 1,
    display: '',
  }

  constructor(props: Props) {
    super(props)
    this.refGaleria = React.createRef()
    this.refCarrossel = React.createRef()
    this.corGradiente = props.corGradiente || 'rgba(255, 255, 255, 9)'
    this.percentualBeirada = props.percentualBeirada || 0
    const dimensoes = ['height', 'width']
    this.fixedArrows = props.fixedArrows ?? false

    if (props.direcao === 'vertical') {
      this.direcao = [Direcao.top, Direcao.bottom]
      this.dimensoes = { principal: dimensoes[0], secundaria: dimensoes[1] }
      this.setaUm = MdKeyboardArrowUp
      this.setaDois = MdKeyboardArrowDown
      this.estiloSeta = { flexDirection: 'column' }
    } else {
      this.direcao = [Direcao.left, Direcao.right]
      this.dimensoes = { principal: dimensoes[1], secundaria: dimensoes[0] }
      this.setaUm = MdKeyboardArrowLeft
      this.setaDois = MdKeyboardArrowRight
      this.estiloSeta = { flexDirection: 'row' }
    }

    this.style = {}
    this.style[
      'max' + capitalize(this.dimensoes.principal, 'Primeira Maiúscula')
    ] = props.tamanhoMaximo
    this.estiloSeta[this.dimensoes.principal] = '10%'
    this.estiloSeta[this.dimensoes.secundaria] = '100%'
    const obj: State = {
      tamanhoCarrossel: 0,
      tamanhoGaleria: 0,
      mouseEnterSeta: 0,
      estiloSetaUm: {},
      estiloSetaDois: {},
      estiloGaleria: {},
    }
    for (let i = 0; i < this.direcao.length; i++) {
      obj[estilosSeta[i]] = {
        backgroundImage:
          'linear-gradient(to ' +
          Direcao[this.direcao[i]] +
          ', rgba(0,0,0,0), ' +
          this.corGradiente +
          ')',
        opacity: 0,
      }
      obj[estilosSeta[i]][Direcao[this.direcao[i]] as keyof CSSProperties] = 0
    }
    this.state = { ...props, ...obj }

    this.estiloSeta.color = this.props.corSeta || 'gray'
    this.state.estiloGaleria[Direcao[this.direcao[0]] as keyof CSSProperties] =
      '0'
  }

  getLimiteInicial = () =>
    Math.round(this.state.tamanhoCarrossel * this.percentualBeirada)
  getLimiteFinal = () => {
    const { tamanhoCarrossel, tamanhoGaleria } = this.state
    if (tamanhoCarrossel >= tamanhoGaleria) return 10
    return (
      Math.round(
        tamanhoCarrossel * (1 - this.percentualBeirada) - tamanhoGaleria,
      ) - (this.props.beiradaFinal || 0)
    )
  }
  getOffsetAtual = () =>
    Number(
      this.state.estiloGaleria[Direcao[this.direcao[0]] as keyof CSSProperties],
    )
  getPasso = (sentido: IndexSeta, tamanhoPasso: number) =>
    -(sentido ? 1 : -1) * tamanhoPasso
  eSetaInvisivel = (iSeta: IndexSeta) =>
    this.state[estilosSeta[iSeta]].opacity === 0
  getDimensaoCamel = (palavra: string) =>
    palavra + capitalize(this.dimensoes.principal, 'Primeira Maiúscula')
  setTimeoutSetas = (intervalo = 100) =>
    (this.timeoutSetas = setTimeout(() => this.ativarSetas(0), intervalo))

  definirEstiloSeta = (iSeta = 2, opacidade?: number, display?: boolean) => {
    let displayStr: string | undefined = undefined
    if (display !== undefined) displayStr = display ? '' : 'none'
    const nomeEstiloSeta = estilosSeta[iSeta]
    if (nomeEstiloSeta) {
      const objState: any = {}
      objState[nomeEstiloSeta] = { ...this.state[nomeEstiloSeta] }
      if (opacidade !== undefined) objState[nomeEstiloSeta].opacity = opacidade
      if (displayStr !== undefined)
        objState[nomeEstiloSeta].display = displayStr
      this.setState(objState)
    } else {
      this.definirEstiloSeta(0, opacidade, display)
      this.definirEstiloSeta(1, opacidade, display)
    }
  }

  definirOffset(passo: number, opacidadeSetas = true) {
    if (opacidadeSetas) this.ativarSetas(passo)
    const objEstilo = { ...this.state.estiloGaleria }
    objEstilo[Direcao[this.direcao[0]]] = Math.min(
      Math.max(this.getOffsetAtual() + passo, this.getLimiteFinal()),
      this.getLimiteInicial(),
    )
    this.setState({ estiloGaleria: objEstilo })
    this.definirDisplaySetas()
    return objEstilo[Direcao[this.direcao[0]]]
  }

  limparTransition = () => {
    const objState = { ...this.state.estiloGaleria }
    objState.transition = ''
    this.setState({ estiloGaleria: objState })
  }

  ativarSetas = (passo: number) => {
    this.clearTimeoutInterval(this.timeoutSetas)
    this.definirEstiloSeta(2, 0)
    const seta = passo > 0 ? 0 : passo < 0 ? 1 : 2
    const opacidade = seta === 2 ? 0 : 1
    this.definirEstiloSeta(seta, opacidade)
  }

  encontrarSelecionado = (elemento: HTMLElement) => {
    const dimensao = this.getDimensaoCamel('offset')
    if (
      !this.state.tamanhoCarrossel ||
      this.state.tamanhoCarrossel > this.state.tamanhoGaleria
    )
      return
    const coordElemento: number =
      getCoords(elemento)[Direcao[this.direcao[0]] as keyof Coordinates]
    const carrossel = this.refCarrossel.current as HTMLElement
    const coordCarrossel: number =
      getCoords(carrossel)[Direcao[this.direcao[0]] as keyof Coordinates]
    const espacoExtra = 30
    const distancia =
      coordCarrossel > coordElemento
        ? Math.max(coordCarrossel - coordElemento + espacoExtra, 0)
        : Math.min(
            coordCarrossel +
              Number(carrossel[dimensao as keyof HTMLElement]) -
              coordElemento -
              Number(elemento[dimensao as keyof HTMLElement]) -
              espacoExtra,
            0,
          )
    this.offsetComTransition(distancia)
  }

  deslizar = (sentido: IndexSeta, tamanhoPasso = 20, tempo = 20) => {
    this.clearTimeoutInterval(this.animacao)
    this.animacao = setInterval(() => {
      const offsetAtual = this.getOffsetAtual()
      const passo = this.getPasso(sentido, tamanhoPasso)
      if (this.definirOffset(passo) === offsetAtual) this.pararDeslizar(sentido)
    }, tempo)
  }

  definirDisplaySetas = () => {
    this.timeoutDisplaySetas = setTimeout(() => {
      const galeria = this.refGaleria.current
      const tamanho = galeria
        ? galeria[
            ('offset' +
              capitalize(
                Direcao[this.direcao[0]],
                'Primeira Maiúscula',
              )) as keyof HTMLElement
          ] ?? 0
        : 0
      const posicao = tamanho
      this.definirEstiloSeta(
        0,
        undefined,
        posicao < this.getLimiteInicial() - 2,
      )
      this.definirEstiloSeta(1, undefined, posicao > this.getLimiteFinal() + 2)
    }, 10)
  }

  offsetComTransition(
    distancia: number,
    taxaTransition = 300,
    opacidadeSetas = true,
  ) {
    this.clearTimeoutInterval(this.timeoutTransition)
    const tempoTransition = Math.abs(distancia) / taxaTransition
    this.setState({
      estiloGaleria: {
        ...this.state.estiloGaleria,
        transition:
          distancia !== 0
            ? Direcao[this.direcao[0]] + ' ' + tempoTransition + 's ease-in-out'
            : this.state.estiloGaleria.transition,
      },
    })
    this.timeoutLimpar = setTimeout(() => {
      this.definirOffset(distancia, opacidadeSetas)
      if (opacidadeSetas) this.setTimeoutSetas(tempoTransition * 1000)
      this.definirDisplaySetas()
    }, 10)
    this.timeoutTransition = setTimeout(
      () => this.limparTransition(),
      tempoTransition * 1000 + 100,
    )
  }

  saltar(sentido: IndexSeta) {
    this.deslizar(sentido, 160)
    this.timeoutSalto = setTimeout(() => {
      this.clearTimeoutInterval(this.timeoutTransition)
      if (this.state.mouseEnterSeta === sentido) this.deslizar(sentido)
    }, 200)
  }

  pararDeslizar = (sentido: IndexSeta) => {
    this.clearTimeoutInterval(this.animacao)
    let i = 10
    this.animacao = setInterval(() => {
      this.definirOffset(this.getPasso(sentido, i), false)
      i -= 0.5
      if (i <= 1) this.clearTimeoutInterval(this.animacao)
    }, 30)
    this.setTimeoutSetas(5)
  }

  clickSeta = (e: SyntheticEvent, i: IndexSeta) => {
    e.stopPropagation()
    this.saltar(i)
  }

  deslizarWheel = (e: any) => {
    e.stopPropagation()
    const passo = -e.deltaY
    this.offsetComTransition(passo, 600)
  }

  detectarTamanho = () => {
    this.setState({
      tamanhoCarrossel: this.getDimensaoRef(this.refCarrossel),
      tamanhoGaleria: this.getDimensaoRef(this.refGaleria),
    })
    if (
      this.state.tamanhoCarrossel >= this.state.tamanhoGaleria &&
      this.state.estiloGaleria[Direcao[this.direcao[0]]] !== '0'
    ) {
      const objEstilo: Coordinates = {}
      objEstilo[Direcao[this.direcao[0]] as keyof Coordinates] = 0
      this.setState({ estiloGaleria: objEstilo })
    }
    this.offsetComTransition(0.1, undefined, false)
  }

  getDimensaoRef = (ref: React.RefObject<HTMLElement>, palavra = 'offset') => {
    if (!ref.current) return 0
    const dimensao = this.getDimensaoCamel(palavra)
    return ref.current[dimensao as keyof HTMLElement] as number
  }

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.final !== undefined) this.chegarFinal(prevProps.final)

    if (this.resizeObserver !== undefined && this.refCarrossel.current !== null)
      this.resizeObserver.observe(this.refCarrossel.current)
  }

  componentDidMount = () => {
    this.resizeObserver = new ResizeObserver(this.detectarTamanho)
    this.resizeObserver.observe(this.refGaleria.current as HTMLElement)
    this.detectarTamanho()
  }

  componentWillUnmount = () => {
    this.clearTimeoutInterval(this.timeoutSetas)
    this.clearTimeoutInterval(this.timeoutTransition)
    this.clearTimeoutInterval(this.timeoutDisplaySetas)
    this.clearTimeoutInterval(this.timeoutLimpar)
    this.clearTimeoutInterval(this.timeoutSalto)
    this.clearTimeoutInterval(this.timeoutDeslizar)
    this.clearTimeoutInterval(this.animacao)
    if (this.resizeObserver !== undefined) this.resizeObserver.disconnect()
    delete this.resizeObserver
  }

  clearTimeoutInterval = (interval?: NodeJS.Timeout) => {
    if (interval === undefined) return
    clearTimeout(interval)
    clearInterval(interval)
  }

  chegarFinal = (final: symbol) => {
    if (this.props.final !== final)
      this.offsetComTransition(-this.state.tamanhoGaleria * 2, 2000)
  }

  comecarDeslizar = (i: IndexSeta) => {
    this.setState({ mouseEnterSeta: i })
    this.deslizar(i)
  }

  render() {
    const setas = [this.setaUm, this.setaDois]
    const padArrowCircle = '0.5vh'
    return (
      <div
        ref={this.refCarrossel}
        className="carrossel"
        onWheel={this.deslizarWheel}
        style={{ ...(this.props.style || {}), ...this.style }}
      >
        {this.state.tamanhoGaleria > this.state.tamanhoCarrossel
          ? setas.map((s, i) => {
              const j = i as IndexSeta
              const Seta = s
              return (
                <div
                  className="seta-galeria"
                  onMouseEnter={() => {
                    if (
                      !this.timeoutDeslizar &&
                      this.state.mouseEnterSeta !== i
                    ) {
                      this.timeoutDeslizar = setTimeout(() => {
                        this.comecarDeslizar(j)
                        this.timeoutDeslizar = undefined
                      }, 150)
                    } else if (!this.timeoutDeslizar) {
                      this.comecarDeslizar(j)
                    }
                  }}
                  onMouseLeave={() => {
                    if (this.timeoutDeslizar) {
                      this.clearTimeoutInterval(this.timeoutDeslizar)
                      this.timeoutDeslizar = undefined
                    }
                    if (this.state.mouseEnterSeta === j) {
                      this.setState({ mouseEnterSeta: 0 })
                      this.pararDeslizar(j)
                    }
                  }}
                  onClick={(e) => this.clickSeta(e, j)}
                  style={{
                    ...this.estiloSeta,
                    ...this.state[estilosSeta[j]],
                    ...this.estiloFixed,
                  }}
                  key={i}
                >
                  <div
                    className="arrow-circle"
                    style={{
                      paddingTop: padArrowCircle,
                      ...(j
                        ? { paddingLeft: padArrowCircle }
                        : { paddingRight: padArrowCircle }),
                    }}
                  >
                    <Seta size={this.props.tamanhoIcone} />
                  </div>
                </div>
              )
            })
          : null}
        <div className="container-galeria">
          <div
            ref={this.refGaleria}
            className="movimentador-galeria"
            style={this.state.estiloGaleria}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Carrossel
