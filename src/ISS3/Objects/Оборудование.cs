﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.ISS3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оборудование.
    /// </summary>
    // *** Start programmer edit section *** (Оборудование CustomAttributes)

    // *** End programmer edit section *** (Оборудование CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОборудованиеE", new string[] {
            "ИнвНомер as \'Инв номер\'",
            "Наименование as \'Наименование\'",
            "Пользователь as \'Пользователь\'",
            "Пользователь.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Пользователь.ФИО"})]
    [MasterViewDefineAttribute("ОборудованиеE", "Пользователь", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    public class Оборудование : ICSSoft.STORMNET.DataObject
    {
        
        private string fИнвНомер;
        
        private string fНаименование;
        
        private IIS.ISS3.Пользователь fПользователь;
        
        private IIS.ISS3.РабочееМесто fРабочееМесто;
        
        // *** Start programmer edit section *** (Оборудование CustomMembers)

        // *** End programmer edit section *** (Оборудование CustomMembers)

        
        /// <summary>
        /// ИнвНомер.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.ИнвНомер CustomAttributes)

        // *** End programmer edit section *** (Оборудование.ИнвНомер CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string ИнвНомер
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Get start)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Get start)
                string result = this.fИнвНомер;
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Get end)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Set start)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Set start)
                this.fИнвНомер = value;
                // *** Start programmer edit section *** (Оборудование.ИнвНомер Set end)

                // *** End programmer edit section *** (Оборудование.ИнвНомер Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.Наименование CustomAttributes)

        // *** End programmer edit section *** (Оборудование.Наименование CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.Наименование Get start)

                // *** End programmer edit section *** (Оборудование.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Оборудование.Наименование Get end)

                // *** End programmer edit section *** (Оборудование.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.Наименование Set start)

                // *** End programmer edit section *** (Оборудование.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Оборудование.Наименование Set end)

                // *** End programmer edit section *** (Оборудование.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Оборудование.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.Пользователь CustomAttributes)

        // *** End programmer edit section *** (Оборудование.Пользователь CustomAttributes)
        [NotNull()]
        public virtual IIS.ISS3.Пользователь Пользователь
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.Пользователь Get start)

                // *** End programmer edit section *** (Оборудование.Пользователь Get start)
                IIS.ISS3.Пользователь result = this.fПользователь;
                // *** Start programmer edit section *** (Оборудование.Пользователь Get end)

                // *** End programmer edit section *** (Оборудование.Пользователь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.Пользователь Set start)

                // *** End programmer edit section *** (Оборудование.Пользователь Set start)
                this.fПользователь = value;
                // *** Start programmer edit section *** (Оборудование.Пользователь Set end)

                // *** End programmer edit section *** (Оборудование.Пользователь Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.ISS3.РабочееМесто.
        /// </summary>
        // *** Start programmer edit section *** (Оборудование.РабочееМесто CustomAttributes)

        // *** End programmer edit section *** (Оборудование.РабочееМесто CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.ISS3.РабочееМесто РабочееМесто
        {
            get
            {
                // *** Start programmer edit section *** (Оборудование.РабочееМесто Get start)

                // *** End programmer edit section *** (Оборудование.РабочееМесто Get start)
                IIS.ISS3.РабочееМесто result = this.fРабочееМесто;
                // *** Start programmer edit section *** (Оборудование.РабочееМесто Get end)

                // *** End programmer edit section *** (Оборудование.РабочееМесто Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Оборудование.РабочееМесто Set start)

                // *** End programmer edit section *** (Оборудование.РабочееМесто Set start)
                this.fРабочееМесто = value;
                // *** Start programmer edit section *** (Оборудование.РабочееМесто Set end)

                // *** End programmer edit section *** (Оборудование.РабочееМесто Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОборудованиеE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОборудованиеE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОборудованиеE", typeof(IIS.ISS3.Оборудование));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Оборудование.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfОборудование CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfОборудование CustomAttributes)
    public class DetailArrayOfОборудование : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.ISS3.DetailArrayOfОборудование members)

        // *** End programmer edit section *** (IIS.ISS3.DetailArrayOfОборудование members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Оборудование by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Оборудование.
        /// </summary>
        public DetailArrayOfОборудование(IIS.ISS3.РабочееМесто fРабочееМесто) : 
                base(typeof(Оборудование), ((ICSSoft.STORMNET.DataObject)(fРабочееМесто)))
        {
        }
        
        public IIS.ISS3.Оборудование this[int index]
        {
            get
            {
                return ((IIS.ISS3.Оборудование)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.ISS3.Оборудование dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
