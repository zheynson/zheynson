var link = document.createElement('a');
link.href = url('../assets/front.pdf');
link.download = 'file.pdf';
link.dispatchEvent(new MouseEvent('click'));