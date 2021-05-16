/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
    // Verificar se entre os componentes filhos existe o componente Else
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else';
    })[0];
    // Retornar apenas os componentes filhos !== de Else
    const ifChild = props.children.filter(child => {
        return child !== elseChild;
    });
    //
    if (props.condicional) {
        return ifChild
    } else if(elseChild)
        return elseChild
    else {
        return false;
    }
}

export const Else = (props) => props.children;