import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Data, Router } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ativo',
  standalone: true,
  imports: [FormsModule, NgxDatatableModule],
  templateUrl: './ativo.component.html',
  styleUrl: './ativo.component.css'
})
export class AtivoComponent implements AfterViewInit {

  @ViewChild('form')
  private form: NgForm | undefined;

  //@ViewChild('selectSituacaoUsuario')
  //public selectSituacaoUsuario: SelectSituacaoUsuarioComponent;

  // public listaDespachos: never[];
  // public quantidadeDeElementos: number;
  activePage = 0;

  //mensagens = MessagesConstants.GRID_FOOTER;

  //private pesquisaDTO;

  constructor(
   // public data: Data,
   // private tipoDespachoService: TipoDespachoService,
    public router: Router,
  //  public spinner: SpinnerService
  ) {
  }

  ngAfterViewInit(): void {
   // this.selectSituacaoUsuario.setSelectValue(MessagesConstants.SITUACAO_ATIVOS);
  }

  pesquisar({ }) {
    // this.spinner.show(AppConstants.CSS_SPINNER);
    // if (!ObjectUtils.isEmpty(pesquisaDTO) && StringUtil.isEmpty(pesquisaDTO.descricao)) {
    //   pesquisaDTO.descricao = null;
    // }
    // this.pesquisaDTO = ObjectUtils.isEmpty(pesquisaDTO) ? pesquisaDTO : pesquisaDTO.descricao;
    // this.activePage = 0;
    // this.tipoDespachoService.getDespachoCodigoDescricao(this.pesquisaDTO, this.selectSituacaoUsuario.getValorSelecionado(), this.activePage, AppConstants.VALOR_INICIAL_QTD_PAGINAS).subscribe(data => {
    //   this.setTable(data);
    //   this.spinner.hide(AppConstants.CSS_SPINNER);
    // }, (error: any) => {
    //   AlertFalha.getMessageFalhaParametrizado(MessagesConstants.SEM_REGISTRO);
    //   this.spinner.hide(AppConstants.CSS_SPINNER);
    // });
  }

  // setTable(data) {
  //   data.listEntidades.forEach(despacho => {
  //     despacho.situacao = despacho.ativo === 'SIM' ? 'ATIVO' : 'INATIVO';
  //   });
  //   this.listaDespachos = data.listEntidades;
  //   this.quantidadeDeElementos = data.numeroLinhas
  // }

  // onMudouPaginaDePesquisa(evento: any) {
  //   // this.activePage = evento.offset;
  //   // this.pesquisar({ value: this.pesquisaDTO });
  // }

  novo() {
    //this.router.navigate([AppConstants.ENDPOINT_CADASTRO_DESPACHO]);
  }

  editar() {
    // this.data.storage = row;

    // this.router.navigate([AppConstants.ENDPOINT_CADASTRO_DESPACHO + AppConstants.barra + row.id]);
  }

  limpar() {
    // this.form.reset();
    // this.listaDespachos = [];
    // this.quantidadeDeElementos = 0;
  }

  // reloadTable = function () {
  //   this.pesquisar({ value: this.pesquisaDTO });
  // }.bind(this);

  excluir() {
  //   AlertConfirmacao.getMessageConfirmacao(MessagesConstants.EXCLUIR_TIPO_DESPACHO).then(event => {
  //     if (event.value === true) {
  //       this.spinner.show(AppConstants.CSS_SPINNER);
  //       this.tipoDespachoService.excluirTipoDespacho(row).subscribe(data => {
  //         this.limpar();
  //         this.spinner.hide(AppConstants.CSS_SPINNER);
  //         AlertConfirmacao.getMessageSucessoParametrizado(MessagesConstants.SUCESSO_EXCLUIR_TIPO_DESPACHO);
  //       }, (error: any) => {
  //         AlertFalha.getMessageFalhaParametrizado(error._body);
  //         this.spinner.hide(AppConstants.CSS_SPINNER);
  //       });
  //     }
  //   });
   }

}
