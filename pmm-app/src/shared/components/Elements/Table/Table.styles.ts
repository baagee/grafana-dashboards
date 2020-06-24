import { css } from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import { selectThemeVariant, stylesFactory } from '@grafana/ui';

export const getStyles = stylesFactory((theme: GrafanaTheme) => {
  const backgroundColor = selectThemeVariant({ light: 'rgb(247, 247, 249)', dark: '#161719' }, theme.type);
  // @ts-ignore
  const borderColor = selectThemeVariant({ light: theme.colors.gray85, dark: '#292929' }, theme.type);
  const headerBackground = selectThemeVariant({ light: 'rgb(247, 247, 249)', dark: '#3D3D3D' }, theme.type);
  const textColor = selectThemeVariant(
    // @ts-ignore
    { light: theme.colors.gray85, dark: 'rgba(255, 255, 255, 0.8)' },
    theme.type
  );

  return {
    /* This will make the table scrollable when it gets too small */
    tableWrap: (size) => css`
        display: block;
        max-width: ${`${size.x}px` || '100%'};
        overflow-x: scroll;
        overflow-y: scroll;
        max-height: ${`${size.y}px` || 'auto'};
        border: 1px solid ${borderColor};
      `,
    table: css`
      /* This is required to make the table full-width */
      display: block;
      max-width: 100%;
      border-collapse: separate; /* Don't collapse */
      border-spacing: 0;

      .table {
        /* Make sure the inner table is always as wide as needed */
        width: 100%;
        border-spacing: 0;

        .tr {
          :last-child {
            .td {
              border-bottom: 0;
            }
          }
        }
        .th,
        .td {
          background-color: ${backgroundColor};
          margin: 0;
          padding: 3px;
          border-bottom: 1px solid ${borderColor};
          border-right: 1px solid ${borderColor};
          color: ${textColor};

          :last-child {
            border-right: 0;
          }
        }

        .th {
          background-color: ${headerBackground};
          position: -webkit-sticky; /* for Safari */
          position: sticky;
          top: 0;
          z-index: 2;
        }
      }
      .tr .td:first-child {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        z-index: 1;
        outline: 1px solid ${borderColor};
      }
      .th:first-child {
        position: -webkit-sticky; /* for Safari */
        position: sticky;
        left: 0;
        z-index: 3;
        outline: 1px solid ${borderColor};
      }
      .pagination {
        padding: 0.5rem;
      }
    `,
    empty: css`
      display: flex;
      width: 100%;
      height: 160px;
      justify-content: center;
      align-items: center;
      border: 1px solid ${borderColor};
    `,
    checkboxColumn: css`
      width: 20px;
    `,
    header: (width) => css`
        min-width: ${width}px;
        max-width: ${width}px;
      `,
    headerContent: css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
  };
});
