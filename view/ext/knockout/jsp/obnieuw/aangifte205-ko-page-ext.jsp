<!DOCTYPE html>
<%@ include file="/jsp/knockout/header.jspf" %>
<html>
<head>
    <!-- styles:start -->
    <%@ include file="/jsp/knockout/styles.jspf" %>
    <!-- styles:end -->

    <!-- start: scripts loading before body -->
    <script type="text/javascript">
        window['NSX'] = {applicationName: 'obfApp'};
    </script>
    <%@ include file="/jsp/knockout/scripts-before.jspf" %>

    <%@ include file="/jsp/obfApp-include-before.jspf" %>

    <!-- header-scripts:start -->
    <!-- header-scripts:end -->
</head>

<body>

<%@ include file="/jsp/knockout/ko-heading.jspf" %>

<div id="page-model">

    <!-- anchor:custom-html-before:start -->
    <!-- anchor:custom-html-before:end -->

    <%--<%@ include file="/jsp/knockout/ko-main.jspf" %>--%>

    <!-- anchor:custom-html:start -->

    <div id="form">
        <span data-bind="template: {
            name: 'obnieuw/aangifte/aangifte205-ko-form',
            data: $data
            }">
        </span>
    </div>

    <!-- anchor:custom-html:end -->

</div> <!-- #pageModel -->

<div id="after-page-model"></div>

<%@ include file="/jsp/knockout/ko-footing.jspf" %>

<!-- an anchor, to add dynamic content -->
<span id="dynamicContent"></span>

<!-- start: scripts loading after page -->
<%@ include file="/jsp/knockout/scripts-after.jspf" %>

<%@ include file="/jsp/obfApp-include-after.jspf" %>

<!-- anchor:custom-scripts-before:start -->
<!-- anchor:custom-scripts-before:end -->

<!-- end: scripts loading after page -->

<script type="text/javascript">
    require(['jquery',
            'obnieuw/aangifte/view/205/Aangifte205FormPage',
//            'obnieuw/aangifte-ko-page',
            'obnieuw/shared/utils/KnockoutExtenders',
            'nsx/nsx-knockout-bindings',
            'nsx/nsx-modules',
            'nsx/nsx-ajax-error',
            'bootstrapjs'],
        function (jQuery, viewModel) {
            jQuery(document).ready(function () {
                var formPage = new viewModel();
                formPage.applyModel();
//      viewModel.applyModel();
            });
        }
    );
</script>

<!-- anchor:custom-scripts-after:start -->
<!-- anchor:custom-scripts-after:end -->
</body>

</html>
