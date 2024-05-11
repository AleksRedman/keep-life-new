export default (value) => { 

  switch (value) { 
    case 'Config/custom': 
      return [
        {
          name: 'light',
          variables: {
            '--app-theme-mode': 'light',
            '--app-primary-color': '#0018a8',
            '--app-secondary-color': '#00aae6',
            '--app-primary-color-opacity': '#E5F6FD',

            '--app-common-sub-text-color': '#9DA6B7',
            '--app-common-main-bg': '#F8F8F8',
            '--app-common-highlight-color': '#f0fbff',
            '--app-common-highlight-light-color': '#F1F7FB',
            '--app-common-layout-border-color': '#F2F3F4',

            '--app-widget-bg': '#ffffff',
            '--app-widget-border-radius': '8px',
            '--app-widget-text-color': '#0C2340',
            '--app-widget-title-color': '#0018a8',
            '--app-widget-layout-line-color': '#D2F1F8',

            '--app-option-border-color': '#DFF5F9',
            '--app-option-disable-bg-color': '#f5f5f5',
            '--app-option-input-text-color': '#8C87A6',
            '--app-option-text-color': '#0018a8',
            '--app-option-label-color': '#0018a8',

            '--app-filter-option-text-color': '#0018a8',
            '--app-filter-option-text-active-color': '#00aae6',
            '--app-filter-option-label-color': '#0018a8',
            '--app-filter-option-border-color': '#DFF5F9',

            '--app-tm-active-color': '#0018a8',
            '--app-tm-dormant-color': '#00aae6',
            '--app-tm-inactive-color': '#4EC5D7',

            '--app-calendar-text-color': '#0018a8',

            '--app-sider-bg-color': '#030065',
            '--app-sider-nav-menu-text-color': '#ffffff',
            '--app-sider-nav-menu-select-text-color': '#ffffff',
            '--app-sider-nav-menu-highlight-color': '#2b2b43',

            '--app-login-title-color': '#0018a8',
            '--app-login-descr-color': '#00aae6',

            '--app-user-opt-name': '#0018a8',
            '--app-user-opt-status': '#00aae6',

            '--app-chart-secondary-color': '#00aae6',
            '--app-chart-path-color': '#0018a8',
            '--app-chart-text-color': '#323232',
            '--app-chart-value-color': '#0018a8',
            '--app-chart-trail-color': '#E5F6FD',
            '--app-chart-axis-color': '#D2F1F8',

            '--app-tag-text-color': '#ffffff',
            '--app-tag-bg-color': '#00aae6',
            '--app-tag-border-radius': '12px',

            '--app-table-text-color': '#0C2340',
            '--app-table-header-text-color': '#ffffff',
            '--app-table-header-sorter-color': '#F6FAFF',
            '--app-table-header-bg-color': '#0018a8',
            '--app-table-actions-color': '#0018a8',
            '--app-table-pagination-text-color': '#0018a8',
            '--app-table-pagination-bg-color': '#F8F8F8',

            '--app-secondary-btn-bg-color': '#D1F1F8',
            '--app-secondary-btn-text-color': '#0018a8'
          }
        }
      ]

    case 'Config': 
    default: 
      return [
        {
          name: 'light',
          variables: {
            '--app-theme-mode': 'light',
            '--app-primary-color': '#70B0DC',
            '--app-secondary-color': '#162848',
            '--app-primary-color-opacity': '#b1d8ee',

            '--app-common-sub-text-color': '#9DA6B7',
            '--app-common-main-bg': '#F8F8F8',
            '--app-common-highlight-color': '#f0fbff',
            '--app-common-highlight-light-color': '#F1F7FB',
            '--app-common-layout-border-color': '#F2F3F4',

            '--app-widget-bg': '#ffffff',
            '--app-widget-border-radius': '0',
            '--app-widget-text-color': '#162848',
            '--app-widget-title-color': '#162848',
            '--app-widget-layout-line-color': '#D2F1F8',

            '--app-option-border-color': '#d9d9d9',
            '--app-option-disable-bg-color': '#f5f5f5',
            '--app-option-input-text-color': '#8C87A6',
            '--app-option-text-color': '#9DA6B7',
            '--app-option-label-color': '#162848',

            '--app-filter-option-text-color': '#8C87A6',
            '--app-filter-option-text-active-color': '#70B0DC',
            '--app-filter-option-label-color': '#162848',
            '--app-filter-option-border-color': '#DFF5F9',

            '--app-tm-active-color': '#70B0DC',
            '--app-tm-dormant-color': '#DF5735',
            '--app-tm-inactive-color': '#EEA541',

            '--app-calendar-text-color': '#818DA2',

            '--app-sider-bg-color': '#ffffff',
            '--app-sider-nav-menu-text-color': '#818DA2',
            '--app-sider-nav-menu-select-text-color': '#70B0DC',
            '--app-sider-nav-menu-highlight-color': '#f0fbff',

            '--app-login-title-color': '#323232',
            '--app-login-descr-color': '#B0B0B0',

            '--app-user-opt-name': '#162848',
            '--app-user-opt-status': '#9DA6B7',

            '--app-chart-secondary-color': '#162848',
            '--app-chart-path-color': '#162848',
            '--app-chart-text-color': '#9DA6B7',
            '--app-chart-value-color': '#162848',
            '--app-chart-trail-color': '#F1F7FB',
            '--app-chart-axis-color': '#F1F7FB',

            '--app-tag-text-color': '#ffffff',
            '--app-tag-bg-color': '#70B0DC',
            '--app-tag-border-radius': '0px',

            '--app-table-text-color': '#162848',
            '--app-table-header-text-color': '#162848',
            '--app-table-header-sorter-color': '#F6FAFF',
            '--app-table-header-bg-color': '#F8F8F8',
            '--app-table-actions-color': '#70B0DC',
            '--app-table-pagination-text-color': '#323232',
            '--app-table-pagination-bg-color': '#F8F8F8',

            '--app-secondary-btn-bg-color': '#162848',
            '--app-secondary-btn-text-color': '#ffffff'
          }
        },
        {
          name: 'dark',
          variables: {
            '--app-theme-mode': 'dark',
            '--app-primary-color': '#70B0DC',
            '--app-secondary-color': '#f0fbff',
            '--app-primary-color-opacity': '#527d96',

            '--app-common-sub-text-color': '#9DA6B7',
            '--app-common-main-bg': '#353941',
            '--app-common-highlight-color': '#3a4d57',
            '--app-common-highlight-light-color': '#F1F7FB',
            '--app-common-layout-border-color': '#221f1f',

            '--app-widget-bg': '#26282B',
            '--app-widget-border-radius': '0',
            '--app-widget-text-color': '#f0fbff',
            '--app-widget-title-color': '#f0fbff',
            '--app-widget-layout-line-color': '#D2F1F8',

            '--app-option-border-color': '#424648',
            '--app-option-disable-bg-color': '#565758',
            '--app-option-input-text-color': '#8C87A6',
            '--app-option-text-color': '#9DA6B7',
            '--app-option-label-color': '#f0fbff',

            '--app-filter-option-text-color': '#8C87A6',
            '--app-filter-option-text-active-color': '#70B0DC',
            '--app-filter-option-label-color': '#f0fbff',
            '--app-filter-option-border-color': '#d9d9d9',

            '--app-tm-active-color': '#70B0DC',
            '--app-tm-dormant-color': '#DF5735',
            '--app-tm-inactive-color': '#EEA541',

            '--app-calendar-text-color': '#818DA2',

            '--app-sider-bg-color': '#26282B',
            '--app-sider-nav-menu-text-color': '#818DA2',
            '--app-sider-nav-menu-select-text-color': '#70B0DC',
            '--app-sider-nav-menu-highlight-color': '#527d96',

            '--app-login-title-color': '#fafafa',
            '--app-login-descr-color': '#B0B0B0',

            '--app-user-opt-name': '#f0fbff',
            '--app-user-opt-status': '#9DA6B7',

            '--app-chart-secondary-color': '#1D51A3',
            '--app-chart-path-color': '#1D51A3',
            '--app-chart-text-color': '#9DA6B7',
            '--app-chart-value-color': '#f0fbff',
            '--app-chart-trail-color': '#3a3b3d',
            '--app-chart-axis-color': '#3a3b3d',

            '--app-tag-text-color': '#26282B',
            '--app-tag-bg-color': '#70B0DC',
            '--app-tag-border-radius': '0px',

            '--app-table-text-color': '#f0fbff',
            '--app-table-header-text-color': '#f0fbff',
            '--app-table-header-sorter-color': '#F6FAFF',
            '--app-table-header-bg-color': '#353941',
            '--app-table-actions-color': '#70B0DC',
            '--app-table-pagination-text-color': '#fafafa',
            '--app-table-pagination-bg-color': '#353941',

            '--app-secondary-btn-bg-color': '#ffffff',
            '--app-secondary-btn-text-color': '#162848'
          }
        }
      ]
  } 
}