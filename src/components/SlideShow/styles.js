import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 48vh;
  background: ${props => `url(${props.BGImage}) no-repeat`};
  background-size: cover;
  background-position: ${props => `${props.align} center`};

  /* Fading animation */

  -webkit-animation: fadein 10s infinite; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 10s infinite; /* Firefox < 16 */
        -ms-animation: fadein 10s infinite; /* Internet Explorer */
         -o-animation: fadein 10s infinite; /* Opera < 12.1 */
            animation: fadein 10s infinite;
            transition-timing-function: cubic-bezier(0.2, 0.1,0.2,0.1);
}
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0.8; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0.8; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0.8; }
    to   { opacity: 1; }
}
`;
