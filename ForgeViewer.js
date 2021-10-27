var viewer;

function launchViewer(urn) {
    var myViewerDiv = document.getElementById('forgeViewer');
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);

    var options = {
        'document': 'http://core3.res.com.tw/ForgeSample1/CTCI2/output.svf',
        'env': 'Local'
    };
    Autodesk.Viewing.Initializer(options, function () {
        viewer.start(options.document, options);
    });
}

function onDocumentLoadSuccess(doc) {
    var viewables = doc.getRoot().getDefaultGeometry();
    viewer.loadDocumentNode(doc, viewables).then(i => {
        // documented loaded, any action?
    });
}

function onDocumentLoadFailure(viewerErrorCode, viewerErrorMsg) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode + '\n- errorMessage:' + viewerErrorMsg);
}

