function ativaSisteminhaUwU() {
    swal({
            title: "",
            text: "Leticya",
            icon: "info",
            dangerMode: true,
        })
        .then((botaoFoiClicado) => {
            swal({
                    title: "",
                    text: "e",
                    icon: "info",
                    dangerMode: true,
                })
                .then((botaoFoiClicado) => {
                    swal({
                            title: "",
                            text: "Gabriel",
                            icon: "warning",
                            dangerMode: true,
                        })
                        .then((botaoFoiClicado) => {
                            swal({
                                    title: "",
                                    text: "Casal",
                                    icon: "warning",
                                    dangerMode: true,
                                })
                                .then((botaoFoiClicado) => {
                                    swal({
                                            title: "",
                                            text: "Lindo",
                                            icon: "warning",
                                            dangerMode: true,
                                        })
                                        .then((botaoFoiClicado) => {
                                            swal({
                                                    title: "",
                                                    text: "Me da um beijo?",
                                                    buttons: true,
                                                })
                                                .then((botaoFoiClicado) => {
                                                    if (botaoFoiClicado) {
                                                        swal({
                                                                title: "",
                                                                text: "BEIJAO LINDO (*ˊᗜˋ*)",
                                                                icon: "success",
                                                                buttons: true,
                                                            })
                                                            .then((botaoFoiClicado) => {
                                                                document.getElementById("imagem_principal").style.display = "block";
                                                            });
                                                    } else {
                                                        swal("", "não me ama (ￗ﹏ￗ ) (ￗ﹏ￗ ) (ￗ﹏ￗ )", "error");
                                                    }
                                                });
                                        });
                                });
                        });
                });
        });
}