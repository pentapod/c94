import React from 'react';
import classnames from 'classnames'

const Button = ({ children, className, theme = {}, small, large, inverse, ...others }) => (
  <button className={classnames('Button', { small, large, inverse }, className)}
    {...others}
  >
    {children}
    <style jsx>{`
      button {
        display: inline-block;
        text-align: center;
        vertical-align: top;
        position: relative;
        padding: .6em 1.2em;
        cursor: pointer;
        line-height: 1.5;
        font-size: 90%;
        border-radius: .25em;
        overflow: hidden;
        color: ${theme.color};
        background-color: transparent;
        text-decoration: none;
        border: 1px solid ${theme.color};
        transition-property: background-color, color;
        transition-duration: .2s;
      }
      button:focus {
        outline: 0;
      }
      button:hover {
        background-color: ${theme.color};
        color: #fff;
        text-decoration: none;
        border-color: ${theme.color};
      }

      button.small {
        padding: .3em .8em;
      }

      button.large {
        padding: .7em 2em;
        font-size: 120%;
        box-sizing: border-box;
        border-width: 2px;
      }

      button.inverse {
        color: #fff;
        background-color: ${theme.color};
      }
      button.inverse:hover {
        background-color: ${theme.hoverColor};
        color: #fff;
        text-decoration: none;
        border-color: ${theme.hoverColor};
      }
    `}</style>
  </button>
)

export {
  Button,
};
