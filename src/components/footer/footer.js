define(
    [
        'react',
        'create-react-class',
    ],
    function (React, createReactClass, $) {
        var Footer = createReactClass({
            appVersion: '1.0.0',
            render: function () {
                var that = this;
                return (
                    <footer className="main-footer">
                        <div className="pull-right hidden-xs">
                            <b>Version</b> {that.appVersion}
                    </div>
                        <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                    </footer>
                )
            }
        });

        return Footer;
    }
)