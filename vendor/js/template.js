
jQuery(document).ready(function ($) {
    jQuery('select').select2();
    //jQuery('#datatable').DataTable();
    function setCurrency (currency) {

        if (!currency.id) { return currency.text; }
        console.log(currency.element.value);
        var $currency = jQuery('<div class="radio"><label><input type="radio" name="select_multiple"><h6>'+currency.text+'</h6><span>' + currency.title + '</span></label></div>');


        return $currency;

    };
    function setTemplate2 (template) {
        if (!template.id) { return template.text; }
        var $render = $('<div class="filter_group_by"><label>'+template.title+'</label><span>' + template.text + '</span></div>');
        return $render;
    };


    jQuery(".select_multiple").select2({
        placeholder: "select saleperson...", //placeholder
        templateResult: setCurrency
    });
    jQuery('select.filter_group_by').select2({
        placeholder: "select saleperson...", //placeholder
        templateSelection: setTemplate2,
        dropdownCssClass: "dropdown-boxshadow"
    });
    jQuery('select#filter_status').select2({
        placeholder: "select status...", //placeholder
        templateSelection: setTemplate2,
        dropdownCssClass: "dropdown-boxshadow"
    });
    function select_to_image(select){
        console.log(select);
        jQuery('select[name="'+select+'"').select2('destroy');
        var html_select_image = '<div class="select_image">';
        jQuery('select[name="'+select+'"').find('option').each(function(){
            var arr = jQuery(this);
            var option_image = jQuery(this).attr('data-image');
            var option_subtitle = jQuery(this).attr('data-subtitle');
            var option_value = jQuery(this).val();
            var option_title = jQuery(this).text();
            html_select_image+='<div id="'+select+'" data-value="'+option_value+'">'+'<img src="'+option_image+'"/><h6>'+option_title+'</h6>';
            html_select_image+='<p>'+option_subtitle+'</p></div>';
        });
        html_select_image+='</div>';
        jQuery(html_select_image).insertAfter('select[name="'+select+'"');
        jQuery('div#'+select).each(function(){
            jQuery(this).click(function(){
                if(jQuery(this).hasClass('click'))
                {
                    jQuery(this).removeClass('click');
                }
                else{
                    jQuery('div#'+select).removeClass('click');
                    jQuery(this).addClass('click');
                }

                jQuery('select[name="'+jQuery(this).attr('id')+'"').val(jQuery(this).attr('data-value'));
            }) ;
        });

    }
    select_to_image('select_platform');
    select_to_image('creative_category');
   // select_to_image('select[name="creative_category"]');


});