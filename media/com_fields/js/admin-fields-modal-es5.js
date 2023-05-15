(function () {
  'use strict';

  /**
   * @copyright  (C) 2018 Open Source Matters, Inc. <https://www.joomla.org>
   * @license    GNU General Public License version 2 or later; see LICENSE.txt
   */
  (function (Joomla) {
    if (!window.parent.Joomla) {
      throw new Error('core.js was not properly initialised');
    }
    if (!Joomla) {
      window.Joomla = {};
    }
    Joomla.fieldIns = function (id, editor) {
      window.parent.Joomla.editors.instances[editor].replaceSelection("{field " + id + "}");
      if (window.parent.Joomla.Modal) {
        window.parent.Joomla.Modal.getCurrent().close();
      }
    };
    Joomla.fieldgroupIns = function (id, editor) {
      window.parent.Joomla.editors.instances[editor].replaceSelection("{fieldgroup " + id + "}");
      if (window.parent.Joomla.Modal) {
        window.parent.Joomla.Modal.getCurrent().close();
      }
    };
  })(Joomla);

})();
